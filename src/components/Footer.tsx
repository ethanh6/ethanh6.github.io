import React from "react";
import { SiGithub, SiLinkedin, SiMedium } from "react-icons/si"; // simple icons: https://react-icons.github.io/react-icons/icons?name=si
import { MdMail } from "react-icons/md"; // material design: https://react-icons.github.io/react-icons/icons?name=md

const Footer = (): JSX.Element => {
  const links = React.useMemo(
    () => [
      {
        url: "https://github.com/ethanh6",
        icon: SiGithub,
      },
      {
        url: "mailto:eh543@cornell.edu",
        icon: MdMail,
      },
      {
        url: "https://linkedin.com/in/ethanhuang0606",
        icon: SiLinkedin,
      },
      {
        url: "https://ethanh6.medium.com",
        icon: SiMedium,
      },
    ],
    []
  );

  return (
    <footer className="w-full h-24 p-16 flex flex-col justify-center items-center bottom-0 left-0">
      <div className="py-6 grid gap-6">
        <a href="/" className="text-current no-underline cursor-pointer">
          Home
        </a>
        <a href="/about" className="text-current no-underline cursor-pointer">
          About
        </a>
        <a href="/blog" className="text-current no-underline cursor-pointer">
          Blog
        </a>
        <a href="/notes" className="text-current no-underline cursor-pointer">
          Notes
        </a>
        <a
          href="/projects"
          className="text-current no-underline cursor-pointer"
        >
          Projects
        </a>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-6 mt-4 justify-center">
        {links.map(({ url, icon: Icon }) => (
          <a
            key={url}
            target="_blank"
            rel="noreferrer"
            className="opacity-70"
            href={url}
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
      <p className="m-0 text-sm text-gray-500">
        © {new Date().getFullYear()} Ethan Huang
      </p>
    </footer>
  );
};

export default Footer;
