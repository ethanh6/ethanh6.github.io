import Head from 'next/head';
/* import dynamic from 'next/dynamic'; */
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Render } from '@9gustin/react-notion-render';
import { ComponentProps } from 'react';
import {
  getAllBlogSlugs,
  queryPagesInDatabase,
  BlogEntry,
  getBlogBySlug,
  getBlocks,
  parseBlogInJSON,
} from '../../lib/notion/blog';
import { getEnvironmentVariable } from '../../lib/';
import { Title, Text, Container, Grid, Link, Card } from '@components';

const BLOG_DB_ID: string = getEnvironmentVariable('NOTION_BLOG_DATABASE_ID');

interface BlogProps extends BlogEntry {
  recordMap: ComponentProps<typeof Render>;
  blocks: any;
}

const Blog: NextPage<BlogProps> = ({
  id,
  name,
  date,
  slug,
  series,
  tags,
  blocks,
}) => (
  <Container width={['100%', 1200]} maxWidth="100vw">
    <Head>
      <title>{name}</title>
      <meta property="og:title" content={name} />
    </Head>
    <Container alignContent="center" alignItems="center" paddingBottom="4rem">
      <Container maxWidth={['100%', '720px']}>
        <Title fontSize="40px" as="h2">
          {name}
        </Title>
      </Container>
      {/* <Container maxWidth={['100%', '720px']} marginY="2rem"> */}
      {/*   <Render blocks={blocks} /> */}
      {/* </Container> */}
    </Container>
    <Container textAlign="center" gridGap=".4rem" my="3rem">
      <Text margin={0}>Ethan Huang - {date}</Text>
    </Container>
  </Container>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const blog_response = await queryPagesInDatabase(BLOG_DB_ID);
  const paths = getAllBlogSlugs(blog_response);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { slug } = context.params;
  const blogMetaData = await getBlogBySlug(slug).then(parseBlogInJSON);

  const blocks = await getBlocks(blogMetaData.id);
  /**/
  /* // Retrieve block children for nested blocks (one level deep), for example toggle blocks */
  /* // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks */
  /* const childBlocks = await Promise.all( */
  /*   blocks */
  /*     .filter((block: any) => block.has_children) */
  /*     .map(async (block) => { */
  /*       return { */
  /*         id: block.id, */
  /*         children: await getBlocks(block.id), */
  /*       }; */
  /*     }), */
  /* ); */
  /**/
  /* const blocksWithChildren = blocks.map((block: any) => { */
  /*   // Add child blocks if the block should contain children but none exists */
  /*   if (block.has_children && !block[block.type].children) { */
  /*     block[block.type]['children'] = childBlocks.find( */
  /*       (x) => x.id === block.id, */
  /*     )?.children; */
  /*   } */
  /*   return block; */
  /* }); */

  return {
    props: {
      ...blogMetaData,
      blocks: blocks,
    },
  };
};

export default Blog;
