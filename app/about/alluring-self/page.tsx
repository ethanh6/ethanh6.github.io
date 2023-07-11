'use client';
import { GetStaticPaths, GetStaticPropsResult, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
/* import { getPageInfo, Page, EXPERIENCES } from '@posts/notion'; */
/* import { Container } from '@components'; */
import { Container, Title, Text, Separator, MDXContent } from '@components';
import Image from 'next/image';

const About = () => (
  <Container
    width={['100%', 1200]}
    maxWidth="100vw"
    marginBottom={['1rem', '4rem']}
  >
    <Head>
      <title>Full Stack Software Development</title>
      <meta property="og:title" content="swe" />
    </Head>

    <Container alignItems="center" mb="2rem">
      <Container flexDirection="row" gridColumnGap="1rem" gridRowGap=".2rem">
        <Text fontSize="small" color="plum" m="0">
          #Typescript
        </Text>
        <Text fontSize="small" color="plum" m="0">
          #Next.js
        </Text>
        <Text fontSize="small" color="plum" m="0">
          #HTML
        </Text>
        <Text fontSize="small" color="plum" m="0">
          #CSS
        </Text>
      </Container>

      <Title fontSize={['2rem']} textAlign="center">
        Full Stack Developer
      </Title>
      <Title fontSize={['1.5rem']} textAlign="center">
        Full-stack development.
      </Title>
      <Container
        flexDirection="row"
        gridGap="1.5rem"
        alignItems="center"
        mb="2rem"
      >
        <Text>March. 2023 - Current</Text>
      </Container>
      {/* <Container position="relative" width="100%" height="300px"> */}
      {/*   <Image */}
      {/*     src={data.Image} */}
      {/*     alt={data.ImageUlt} */}
      {/*     layout="fill" */}
      {/*     objectFit="cover" */}
      {/*   /> */}
      {/* </Container> */}
      {/* <Container mt="1rem" gridGap="1rem" width="61.8%"> */}
      {/*   <Container pl="2rem" borderRadius="3px" textAlign="left"> */}
      {/*     <MDXContent {...source} /> */}
      {/*     <Separator /> */}
      {/*   </Container> */}
      {/**/}
      {/*   <Container mt="2rem" pl="2rem" borderRadius="3px" textAlign="center"> */}
      {/*     <Text m="0" fontSize="smaller"> */}
      {/*       {data.Stack.join(', ')} */}
      {/*     </Text> */}
      {/*   </Container> */}
      {/* </Container> */}
    </Container>
  </Container>
);

export default About;
