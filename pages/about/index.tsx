import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPosts } from '../../lib/api';

// https://react-icons.github.io/react-icons/icons?name=si
import {
  SiCplusplus,
  SiTypescript,
  SiPython,
  SiLua,
  SiRust,
  SiSolidity,
  SiNeovim,
  SiTmux,
  SiGithub,
  SiReact,
  SiNextdotjs,
  SiBitcoin,
  SiLinux,
  SiEthereum,
  SiBrave,
  SiNotion,
  SiMedium,
  SiDocker,
} from 'react-icons/si';
/* import { getPosts, Post } from '@posts'; */
import { TransparentLink } from '@components';

const About = ({ experiences }): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiCplusplus,
        url: 'https://cplusplus.com',
      },
      {
        Icon: SiPython,
        url: 'https://www.python.org/',
      },
      {
        Icon: SiTypescript,
        url: 'https://www.typescriptlang.org/',
      },
      {
        Icon: SiLua,
        url: 'https://www.lua.org',
      },
      {
        Icon: SiRust,
        url: 'https://www.rust-lang.org',
      },
      {
        Icon: SiSolidity,
        url: 'https://soliditylang.org',
      },
      {
        Icon: SiNotion,
        url: 'https://www.notion.so',
      },
      {
        Icon: SiReact,
        url: 'https://reactjs.org/',
      },
      {
        Icon: SiNextdotjs,
        url: 'https://nextjs.org/',
      },
      {
        Icon: SiNeovim,
        url: 'https://neovim.io',
      },
      {
        Icon: SiTmux,
        url: 'https://github.com/tmux/tmux',
      },
      {
        Icon: SiGithub,
        url: 'https://github.com',
      },
      {
        Icon: SiLinux,
        url: 'https://www.linux.org',
      },
      {
        Icon: SiBitcoin,
      },
      {
        Icon: SiEthereum,
        url: 'https://www.ethereum.org',
      },
      {
        Icon: SiBrave,
        url: 'https://brave.com',
      },
      {
        Icon: SiMedium,
        url: 'https://medium.com',
      },
      {
        Icon: SiDocker,
        url: 'https://www.docker.com',
      },
    ],
    [],
  );

  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Container alignContent="center" alignItems="center" paddingBottom="4rem">
        <Title fontSize="40px" as="h2">
          About me
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="2rem">
          <Text>I&apos;m a software engineer living in Taipei.</Text>
        </Container>
      </Container>
      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="2rem"
        gridGap="3rem"
      >
        <Title fontSize="40px" as="h2">
          Experiences
        </Title>
        <Container width="100%">
          {experiences.map(({ data }, i: number) => (
            /* Description, Name, Slug, DateSlug, Order  */
            <TransparentLink href={`/about/${data.Slug}`} key={i}>
              <Grid
                key={i}
                gridTemplateColumns="1fr 4fr"
                justifyItems="flex-start"
                gridGap="1rem"
                paddingY="2rem"
                borderBottom="1px solid rgba(0,0,0,0.1)"
              >
                <Container width="100%">
                  <Text>{experiences.length - i - 1}</Text>
                </Container>
                <Grid width="100%" gridTemplateColumns="4fr 1fr">
                  <Container
                    width="100%"
                    alignItems="flex-start"
                    textAlign="start"
                  >
                    <Grid
                      width="100%"
                      gridTemplateColumns="repeat(1, auto)"
                      justifyItems="flex-start"
                      justifyContent="flex-start"
                      gridGap="1rem"
                    >
                      <Title fontSize="1.3rem" margin={0} as="h3">
                        {data.Name}
                      </Title>
                      <Text
                        fontSize="smaller"
                        margin={0}
                        color="rgba(0, 0, 0, 0.1)"
                      >
                        {data.DateSlug}
                      </Text>
                    </Grid>
                    <Text fontSize="1rem">{data.Description}</Text>
                  </Container>
                  <Text fontSize="1.5rem">&rarr;</Text>
                </Grid>
              </Grid>
            </TransparentLink>
          ))}
        </Container>
      </Container>

      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Title fontSize="40px" as="h2">
          Technologies I use
        </Title>
        <Grid
          gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
          gridGap="1rem"
          justifyItems="center"
          maxWidth="40rem"
        >
          {stacks.map(({ Icon, url }, i) => (
            <Link href={url} key={url}>
              <Card key={i}>
                <Icon size="2rem" />
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) => b.data.Order - a.data.Order);
  return {
    props: {
      experiences,
    },
  };
};

export default About;
