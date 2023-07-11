'use client';
import { GetStaticPaths, GetStaticPropsResult, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ComponentProps } from 'react';
import { getPosts } from '../../lib/api';
import { Container, Title, Text, Separator, MDXContent } from '@components';
import Image from 'next/image';

const About = () => (
  <Container
    width={['100%', 1200]}
    maxWidth="100vw"
    marginBottom={['1rem', '4rem']}
  >
    <Head>
      <title>CS</title>
      <meta property="og:title" content="" />
    </Head>

    <Container alignItems="center" mb="2rem">
      <Container flexDirection="row" gridColumnGap="1rem" gridRowGap=".2rem">
        <Text fontSize="small" color="plum" m="0">
          #Algorithm
        </Text>
        <Text fontSize="small" color="plum" m="0">
          #Machine Learning
        </Text>
        <Text fontSize="small" color="plum" m="0">
          #Data Structure
        </Text>
      </Container>

      <Title fontSize={['2rem']} textAlign="center">
        I am a CS student at UCSD.
      </Title>
      <Title fontSize={['1.5rem']} textAlign="center">
        Aug. 2019 - May 2021
      </Title>
      <Container
        flexDirection="row"
        gridGap="1.5rem"
        alignItems="center"
        mb="2rem"
      >
        <Text>Anoter container.</Text>
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
