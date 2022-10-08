import { Client } from '@notionhq/client';
import { compact } from 'lodash';
import { getEnvironmentVariable } from '../index';

// https://github.com/makenotion/notion-sdk-js/blob/main/src/api-endpoints.ts
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: getEnvironmentVariable('NOTION_KEY') });

interface ExperienceEntry {
  Description: string;
  Name: string;
  DateSlug: string;
  Slug: string;
  Order: number;
}

const getExperience = async (): Promise<Array<ExperienceEntry>> => {
  const EXP_DBID: string = getEnvironmentVariable(
    'NOTION_EXPERIENCE_DATABASE_ID',
  );
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: EXP_DBID,
    page_size: 10000,
  });
  const results = response.results;
  return compact(
    results.map((result) => {
      const res = (result as any).properties;
      const _description = res.Description.rich_text[0].plain_text;
      const _name = res.Name.title[0].plain_text;
      const _dateslug = res.DateSlug.rich_text[0].plain_text;
      const _slug = res.Slug.rich_text[0].plain_text;
      const _order = res.Order.number;
      return {
        Description: _description,
        Name: _name,
        DateSlug: _dateslug,
        Slug: _slug,
        Order: _order,
      };
    }),
  );
};

export type { ExperienceEntry };
export { getExperience };
