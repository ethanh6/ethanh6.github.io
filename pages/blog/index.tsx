import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticPropsResult, NextPage } from 'next';
import { Title, Link, Container, Grid, Card, Image, Text } from '@components';
import { GetStaticProps } from 'next';
import { getPosts } from '../../lib/api';

/* interface BlogProps { */
/*   blogs: BlogEntry[]; */
/* } */

const Blog = ({ blogs }: any) => {
  return (
    <Container>
      <Head>
        <title>Blog - Ethan Huang</title>
        <meta property="og:title" content="Blog – Ethan Huang" />
      </Head>

      <Container
        alignContent="center"
        alignItems="center"
        paddingBottom="0.5rem"
      >
        <Title fontSize="40px" as="h2">
          {' '}
          Blog{' '}
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text> Thoughts about code and some other things. </Text>
        </Container>
      </Container>

      <Container mb="2em">
        <Grid gridTemplateColumns={['1fr', '1fr']} gridGap={['3rem', '2rem']}>
          {blogs.map(({ data }: any, i: number) => (
            <Link key={i} href={'/blog/' + data.Slug}>
              <Card padding={[0]} margin={[0]}>
                <Grid
                  gridTemplateColumns={'1fr'}
                  justifyItems={['center', 'flex-start']}
                  gridGap="1rem"
                  paddingBottom="0.5rem"
                >
                  {data.Image && (
                    <Image
                      src={data.Image}
                      width="100%"
                      height="auto"
                      alt={data.Title}
                    />
                  )}
                  <Container
                    gridGap=".5rem"
                    alignItems={['center', 'flex-start']}
                    padding="1rem"
                  >
                    <Title
                      as="h2"
                      fontSize="1.5rem"
                      textAlign={['center', 'left']}
                      margin={0}
                    >
                      {data.Title}
                    </Title>
                    <Grid
                      width="100%"
                      gridTemplateColumns="repeat(2, 1)"
                      justifyItems="flex-start"
                      justifyContent="flex-start"
                      gridGap="1rem"
                      paddingBottom="1rem"
                    >
                      <Text margin={0} fontWeight="initial" fontSize=".9rem">
                        {data.Date} - {data.Series}
                      </Text>
                    </Grid>
                  </Container>
                </Grid>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

// uri, date, title, cover, coverposition
export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getPosts('blogs');
  blogs.sort(
    (a, b) => new Date(b.data.Date).getTime() - new Date(a.data.Date).getTime(),
  );
  return {
    props: {
      blogs,
    },
  };
};

export default Blog;
