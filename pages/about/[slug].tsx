import { GetStaticPaths, GetStaticPropsResult, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
/* import { getPageInfo, Page, EXPERIENCES } from '@posts/notion'; */
/* import { Container } from '@components'; */
import { ComponentProps } from 'react';
import { getPosts } from '../../lib/api';
import { Container, Title, Text, Separator, MDXContent } from '@components';
import Image from 'next/image';

const About = ({ data, source }: any) => (
  <Container
    width={['100%', 1200]}
    maxWidth="100vw"
    marginBottom={['1rem', '4rem']}
  >
    <Head>
      <title>{data.Name}</title>
      <meta property="og:title" content={data.Title} />
    </Head>

    <Container alignItems="center" mb="2rem">
      <Container flexDirection="row" gridColumnGap="1rem" gridRowGap=".2rem">
        {data.Tags.map((tag: string) => (
          <Text fontSize="small" color="plum" key={tag} m="0">
            #{tag}
          </Text>
        ))}
      </Container>

      <Title fontSize={['2rem']} textAlign="center">
        {data.Name}
      </Title>
      <Title fontSize={['1.5rem']} textAlign="center">
        {data.Description}
      </Title>
      <Container
        flexDirection="row"
        gridGap="1.5rem"
        alignItems="center"
        mb="2rem"
      >
        <Text>{data.Date}</Text>
      </Container>
      <Container position="relative" width="100%" height="300px">
        <Image
          src={data.Image}
          alt={data.ImageUlt}
          layout="fill"
          objectFit="cover"
        />
      </Container>
      <Container mt="1rem" gridGap="1rem" width="61.8%">
        <Container pl="2rem" borderRadius="3px" textAlign="left">
          <MDXContent {...source} />
          <Separator />
        </Container>

        <Container mt="2rem" pl="2rem" borderRadius="3px" textAlign="center">
          <Text m="0" fontSize="smaller">
            {data.Stack.join(', ')}
          </Text>
        </Container>
      </Container>
    </Container>
  </Container>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) => b.data.Order - a.data.Order);
  const paths = experiences.map((obj) => ({ params: { slug: obj.data.Slug } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) => b.data.Order - a.data.Order);
  const experience = experiences.find(
    ({ data }: any) => data.Slug === params?.slug,
  );

  if (!experience) {
    return {
      notFound: true,
    };
  }
  const data = experience.data;
  const source = experience.source;
  return {
    props: {
      data,
      source,
    },
  };
};

export default About;
