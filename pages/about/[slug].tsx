import { GetStaticPaths, GetStaticPropsResult, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
/* import { getPageInfo, Page, EXPERIENCES } from '@posts/notion'; */
/* import { Container } from '@components'; */
import { ComponentProps } from 'react';
import { getPosts } from '../../lib/api';
import { Container, Title, Text } from '@components';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const About = ({ data, content }) => (
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
      <div>
        <MDXRemote {...content} components={{ Text }} />
      </div>
      <Container
        flexDirection="row"
        gridGap="1.5rem"
        alignItems="center"
        mb="2rem"
      >
        <Text>{data.DateSlug}</Text>
      </Container>
      {/* <Container position="relative" width="100%" height="300px"> */}
      {/*   <Image */}
      {/*     src={experience.data.image} */}
      {/*     alt={experience.data.title} */}
      {/*     layout="fill" */}
      {/*     objectFit="cover" */}
      {/*     placeholder="blur" */}
      {/*     blurDataURL={experience.data.blurImage} */}
      {/*   /> */}
      {/* </Container> */}
      <Container mt="1rem" gridGap="1rem">
        <Container
          pl="2rem"
          backgroundColor="rgb(241, 241, 239)"
          borderRadius="3px"
        >
          <Text as="h3" fontWeight="normal">
            {content}
          </Text>
        </Container>
        <Text m="0" fontSize="smaller" textAlign="center">
          {data.Stack.join(', ')}
        </Text>
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

/* type Params = { */
/*   params: { */
/*     slug: keyof typeof EXPERIENCES; */
/*   }; */
/* }; */

export const getStaticProps = async ({ params }) => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) => b.data.Order - a.data.Order);
  const experience = experiences.find(({ data }) => data.Slug === params?.slug);

  if (!experience) {
    return {
      notFound: true,
    };
  }

  const data = experience.data;
  const content = await serialize(experience.content);
  return {
    props: {
      data,
      content,
    },
  };
};

export default About;
