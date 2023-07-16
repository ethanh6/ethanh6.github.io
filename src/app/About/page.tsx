import React from 'react';
import Content from '@components/Content'
import Link from 'next/link'

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

export default function Home() {
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
        url: 'https://bitcoin.org/en/',
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
    <Content title="about me">
      <div className="text-2xl text-right mb-9">I'm a software engineer based in Bay Area.</div>
      <div className="grid grid-row-3 gap-5">
        <div>
          <div className="text-3xl">Alluring Self</div>
          <div className="text-2xl">Full Stack Software Engineer</div>
          <div className="text-1xl">Feb. 2023 - Current</div>
        </div>
        <div>
          <div className="text-3xl">Cornell Tech</div>
          <div className="text-2xl">Master of Engineering in Computer Science</div>
          <div className="text-1xl">Class of 2022</div>
        </div>
        <div>
          <div className="text-3xl">University of California, San Diego</div>
          <div className="text-2xl">Bachelor of Science in Computer Science</div>
          <div className="text-1xl">Class of 2021</div>
        </div>
      </div>
      {/* <div className="grid grid-rows-3 grid-cols-6 m-7"> */}
      {/*   {stacks.map(({ Icon, url }, i) => ( */}
      {/*     <Link href={url} key={i} className="bg-white p-7"> */}
      {/*       <Icon size="2rem" /> */}
      {/*     </Link> */}
      {/*   ))} */}
      {/* </div> */}
    </Content>
  )
}
