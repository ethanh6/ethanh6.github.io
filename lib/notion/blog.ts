import { Client } from '@notionhq/client';
import { compact } from 'lodash';
import { getEnvironmentVariable } from '../index';
import { ParsedUrlQuery } from 'querystring';

// https://github.com/makenotion/notion-sdk-js/blob/main/src/api-endpoints.ts
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: getEnvironmentVariable('NOTION_KEY') });

export const queryPagesInDatabase = async (
  databaseID: string,
): Promise<QueryDatabaseResponse> => {
  const response = await notion.databases.query({
    database_id: databaseID,
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  });
  return response;
};

export interface BlogEntry {
  id: string;
  name: string;
  date: string;
  published: boolean;
  slug: string;
  series: string;
  tags: Array<string>;
}

export const processBlogResponse = ({
  results,
}: QueryDatabaseResponse): Array<BlogEntry> => {
  return compact(
    results.map((result) => {
      const res = (result as any).properties;
      const _name = <string>res.Name.title[0].text.content;
      const _created_time = <string>res.Created.date.start;
      const _publish = <boolean>res.Publish.checkbox;
      const _slug = <string>res.Slug.rich_text[0].plain_text;
      const _series = <string>res.Series.select.name;
      const _tags = <Array<string>>(
        res.Tags.multi_select.map(
          (x: { id: string; name: string; color: string }) => x.name,
        )
      );
      if (
        result.object === 'page' &&
        'url' in result &&
        'properties' in result &&
        _name &&
        _created_time &&
        _slug &&
        _series &&
        _tags &&
        _publish
      ) {
        return {
          id: result.id,
          name: _name,
          date: _created_time,
          published: _publish,
          slug: _slug,
          series: _series,
          tags: _tags,
        } as BlogEntry;
      }
    }),
  );
};

export const getAllBlogSlugs = ({
  results,
}: QueryDatabaseResponse): Array<{ params: { slug: string } }> => {
  return compact(
    results.map((result) => {
      const res = (result as any).properties;
      const _publish = <boolean>res.Publish.checkbox;
      const _slug = <string>res.Slug.rich_text[0].plain_text;
      if (
        result.object === 'page' &&
        'url' in result &&
        'properties' in result &&
        _slug &&
        _publish
      ) {
        return {
          params: {
            slug: _slug,
          },
        };
      }
    }),
  );
};

export const getBlogBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: getEnvironmentVariable('NOTION_BLOG_DATABASE_ID'),
    page_size: 1,
    filter: {
      property: 'Slug',
      rich_text: {
        contains: slug,
      },
    },
  });
  return response.results[0];
};

export interface ISlugParams extends ParsedUrlQuery {
  slug: string;
}

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  return response.results;
};

export const parseBlogInJSON = async (obj: any) => {
  const id: string = obj.id;
  const name: string = obj.properties.Name.title[0].text.content;
  const date: string = obj.properties.Created.date.start;
  const publish: string = obj.properties.Publish.checkbox;
  const slug: string = obj.properties.Slug.rich_text[0].plain_text;
  const series: string = obj.properties.Series.select.name;
  const tags: Array<string> = obj.properties.Tags.multi_select.map(
    (x: { id: string; name: string; color: string }) => x.name,
  );

  return {
    id,
    name,
    date,
    publish,
    slug,
    series,
    tags,
  };
};
