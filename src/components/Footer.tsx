import React from 'react'
import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si' // simple icons: https://react-icons.github.io/react-icons/icons?name=si
import { MdMail } from 'react-icons/md' // material design: https://react-icons.github.io/react-icons/icons?name=md
import Link from 'next/link'

const Footer = (): JSX.Element => {
  const links = React.useMemo(
    () => [
      {
        url: 'https://github.com/ethanh6',
        icon: SiGithub
      },
      {
        url: 'mailto:eh543@cornell.edu',
        icon: MdMail
      },
      {
        url: 'https://linkedin.com/in/ethanhuang0606',
        icon: SiLinkedin
      },
      {
        url: 'https://ethanh6.medium.com',
        icon: SiMedium
      }
    ],
    []
  )

  return (
    <footer className='w-full h-24 p-16 mt-6 flex flex-col justify-center items-center bottom-0 left-0'>
      <div className='py-3 flex flex-row gap-6'>
        <Link href='/' className='text-current no-underline cursor-pointer'>
          Home
        </Link>
        <Link href='/about' className='text-current no-underline cursor-pointer'>
          About
        </Link>
        <Link href='/blog' className='text-current no-underline cursor-pointer'>
          Blog
        </Link>
        <Link href='/notes' className='text-current no-underline cursor-pointer'>
          Notes
        </Link>
        <Link href='/projects' className='text-current no-underline cursor-pointer'>
          Projects
        </Link>
      </div>
      <div className='grid grid-cols-4 gap-6 py-3 justify-center'>
        {links.map(({ url, icon: Icon }) => (
          <a key={url} target='_blank' rel='noreferrer' className='opacity-70' href={url}>
            <Icon size={22} />
          </a>
        ))}
      </div>
      <div className='m-0 text-sm text-gray-500 pt-3 pb-8'>© {new Date().getFullYear()} Ethan Huang</div>
    </footer>
  )
}

export default Footer
