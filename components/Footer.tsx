import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';
import React from 'react';
import { SiGithub, SiLinkedin, SiTwitter, SiMedium } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
/* import { Malt, Instagram } from '@icons'; */

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;

const Footer = (): JSX.Element => {
  const links = React.useMemo(
    () => [
      {
        url: 'https://github.com/ethanh6',
        icon: SiGithub,
      },
      /* { */
      /*   url: 'https://twitter.com/EthanHuang18', */
      /*   icon: SiTwitter, */
      /* }, */
      {
        url: 'mailto:eh543@cornell.edu',
        icon: MdMail,
      },
      {
        url: 'https://linkedin.com/in/ethanhuang0606',
        icon: SiLinkedin,
      },
      {
        url: 'https://ethanh6.medium.com',
        icon: SiMedium,
      },
    ],
    [],
  );

  return (
    <StyledFooter>
      <Container paddingY="25px">
        <Grid gridGap="30px">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/projects">Projects</Link>
        </Grid>
      </Container>
      <FooterGrid>
        {links.map(({ url, icon: Icon }) => (
          <Link key={url} target="_blank" opacity={0.7} href={url}>
            <Icon size={22} />
          </Link>
        ))}
      </FooterGrid>
      <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
        © {new Date().getFullYear()} Ethan Huang
      </Text>
    </StyledFooter>
  );
};

export default Footer;
