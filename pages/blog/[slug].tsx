import Head from 'next/head';
/* import dynamic from 'next/dynamic'; */
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Render } from '@9gustin/react-notion-render';
import { ComponentProps } from 'react';
import { BlogEntry } from '../../lib/notion/blog';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { Separator, MDXContent } from '@components';
import { getPosts } from '../../lib/api';

interface BlogProps extends BlogEntry {
  recordMap: ComponentProps<typeof Render>;
  blocks: any;
}

const Blog = ({ data, source }) => (
  <Container width={['100%', 1200]} maxWidth="200vw">
    <Head>
      <title>{data.Title}</title>
      <meta property="og:title" content={data.Title} />
    </Head>
    <Container alignContent="center" alignItems="center" paddingBottom="4rem">
      <Container maxWidth={['100%', '720px']}>
        <Title fontSize="40px" as="h2">
          {data.Title}
        </Title>
      </Container>
      <Container mt="1rem" gridGap="1rem" width="61.8%">
        <Container pl="2rem" borderRadius="3px" textAlign="left">
          <MDXContent {...source} />
          <Container
            textAlign="center"
            gridGap=".4rem"
            my="3rem"
            paddingBottom="1rem"
          >
            <Text margin={0}>
              {data.Author} @ {data.Date}
            </Text>
          </Container>
          <Separator />
        </Container>
      </Container>
    </Container>
  </Container>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getPosts('blogs');
  blogs.sort(
    (a, b) => new Date(b.data.Date).getTime() - new Date(a.data.Date).getTime(),
  );
  const paths = blogs.map((obj) => ({ params: { slug: obj.data.Slug } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogs = await getPosts('blogs');
  blogs.sort(
    (a, b) => new Date(b.data.Date).getTime() - new Date(a.data.Date).getTime(),
  );
  const blog = blogs.find(({ data }) => data.Slug === params?.slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }
  const data = blog.data;
  const source = blog.source;
  return {
    props: {
      data,
      source,
    },
  };
};

export default Blog;
