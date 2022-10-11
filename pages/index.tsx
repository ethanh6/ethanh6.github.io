import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Title, Button, Grid, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="0px"
      paddingBottom="10px"
      gridGap="4rem"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          src="/img/me.jpeg"
          alt="Ethan Huang"
          width="120px"
          height="120px"
          objectFit="cover"
          className={styles.image}
        />
        <Title>Ethan Huang</Title>
        <Title
          fontSize="2rem"
          color="rgba(0, 0, 0, 0.6)"
          fontWeight="500"
          as="h2"
        >
          I build software.
        </Title>
        <Container maxWidth="600px" alignItems="center" alignContent="center">
          <Text textAlign="center">
            I&apos;m a Computer Science graduate at Cornell Tech, Cornell
            University.<br></br>
            I&apos;m experienced with Python, C++, C, and JavaScript.
          </Text>
          <Text textAlign="center">
            I&apos;m actively looking for job opportunities. Feel free to
            contact me!
          </Text>
          <Grid
            gridGap="3rem"
            marginTop="2rem"
            gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
            justifyItems="stretch"
            alignItems="stretch"
          >
            <Link href="/about">
              <Button
                width="100%"
                backgroundColor="rgb(226,232,240)"
                color="black"
                variant="secondary"
              >
                More about me
              </Button>
            </Link>
            <Link href="mailto:eh543@cornell.edu">
              <Button
                width="100%"
                backgroundColor="rgb(226,232,240)"
                color="black"
                variant="secondary"
              >
                <motion.span
                  initial={{ display: 'inline-block' }}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2,
                  }}
                >
                  👋
                </motion.span>{' '}
                Get in touch
              </Button>
            </Link>
          </Grid>
        </Container>
      </Container>
    </Container>
  </Container>
);

export default Home;
