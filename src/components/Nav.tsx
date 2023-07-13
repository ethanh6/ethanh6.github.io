import { useRouter } from 'next/router'
import React from 'react'
import Menu from '@icons/Menu'
import Close from '@icons/Close'
import Grid from '@components/Grid'
import Container from '@components/Container'
import Link from 'next/link'

import { BiMenu, BiArrowBack } from 'react-icons/bi' // https://react-icons.github.io/react-icons/icons?name=bi

export interface NavProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const Links = (): JSX.Element => (
  <>
    <Link href='/' className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'>
      Home
    </Link>
    <Link
      href='/About'
      className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'
    >
      About
    </Link>
    <Link
      href='/Blog'
      className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'
    >
      Blog
    </Link>
    <Link
      href='/Note'
      className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'
    >
      Note
    </Link>
    <Link
      href='/Project'
      className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'
    >
      Projects
    </Link>
  </>
)

const Nav = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
  return (
    <Container className='w-auto'>
      <Grid className='grid-cols-1 md:grid-cols-3 gap-4 px-8 md:px-4 items-center justify-around my-12'>
        <Link
          href='/'
          className='m-0 text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50 hidden md:flex justify-start pl-14'
        >
          Ethan Huang
        </Link>

        {/* <Container className="sm:flex md:hidden cursor-pointer hover:bg-black z-20">
          {isOpen ? (
            <button onClick={(evt) => evt.type === "click" && onClose()}>
              <Close size="2rem" style={{ margin: "-0.3rem" }} />
            </button>
          ) : (
            <button onClick={(evt) => evt.type === "click" && onOpen()}>
              <Menu size="1.6rem" />
            </button>
          )}
        </Container> */}
        <Container className='content-between hidden md:flex shrink-0 col-span-2'>
          <Grid className='self-center w-fit items-center justify-items-center bg-gray-100 rounded-full p-4 relative grid-cols-4 bg-origin-padding px-5'>
            <div
              className='bg-white absolute rounded-full h-4/5'
              style={{
                left: '6px',
                width: '70px'
              }}
            />
            <Link
              href='/'
              className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'
            >
              Home
            </Link>
            <Link
              href='/About'
              className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'
            >
              About
            </Link>
            <Link
              href='/Blog'
              className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'
            >
              Blog
            </Link>
            <Link
              href='/Project'
              className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50'
            >
              Project
            </Link>
          </Grid>
        </Container>
        <Link
          href='/Contact'
          className='text-current no-underline cursor-pointer z-10 font-medium transition-opacity duration-300 hover:opacity-50 hidden md:flex justify-end pr-14'
        >
          Contact
        </Link>
      </Grid>
    </Container>
  )
}

export default Nav
