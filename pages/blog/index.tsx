import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticPropsResult, NextPage } from 'next';

import { getPageInfo, Page, POSTS } from '@posts/notion';
import { Title, Link, Container, Grid, Card, Image, Text } from '@components';
import {
  queryPagesInDatabase,
  processBlogResponse,
  BlogEntry,
} from '../../lib/notion/blog';
import { GetStaticProps } from 'next';
import { getEnvironmentVariable } from '../../lib/index';

const Blog_DBID: string = getEnvironmentVariable('NOTION_BLOG_DATABASE_ID');

interface BlogProps {
  blogs: BlogEntry[];
}

const Blog: NextPage<BlogProps> = ({ blogs }) => {
  return (
    <Container maxWidth={1200}>
      <Head>
        <title>Blog - Ethan Huang</title>
        <meta property="og:title" content="Blog – Ethan Huang" />
      </Head>
      <Container mb="3rem">
        <Title fontSize="40px">Blog</Title>
        <Text textAlign="center">
          Thoughts about code and some other things.
        </Text>
      </Container>

      <Grid gridTemplateColumns={['1fr', '1fr']} gridGap={['3rem', '2rem']}>
        {blogs.map(({ id, name, date, slug, series, tags }, i) => (
          <Link key={id} href={'/blog/' + slug}>
            <Card padding={[0]} margin={[0]}>
              <Grid
                gridTemplateColumns={'1fr'}
                justifyItems={['center', 'flex-start']}
                gridGap="1rem"
                paddingBottom="0.5rem"
              >
                {/* {cover && ( */}
                {/*   <BlogImage */}
                {/*     src={cover} */}
                {/*     width="100%" */}
                {/*     height="auto" */}
                {/*     alt={title} */}
                {/*   /> */}
                {/* )} */}
                <Container
                  gridGap=".5rem"
                  alignItems={['center', 'flex-start']}
                >
                  <Title
                    as="h2"
                    fontSize="1.5rem"
                    textAlign={['center', 'left']}
                    margin={0}
                  >
                    {name}
                  </Title>

                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                    paddingBottom="1rem"
                  >
                    <Text margin={0} fontWeight="initial" fontSize=".9rem">
                      {date}
                    </Text>
                    <Text margin={0} fontWeight="initial" fontSize=".9rem">
                      {series}
                    </Text>
                  </Grid>
                </Container>
              </Grid>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

// uri, date, title, cover, coverposition
export const getStaticProps: GetStaticProps = async () => {
  const blogs: Array<BlogEntry> = await queryPagesInDatabase(Blog_DBID).then(
    processBlogResponse,
  );
  return {
    props: {
      blogs: blogs,
    },
  };
};

export default Blog;
