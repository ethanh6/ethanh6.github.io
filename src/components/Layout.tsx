import React from 'react'
import Head from 'next/head'
import Footer from '@components/Footer'
import TopBar from '@components/TopBar'
import SideNav from '@components/SideNav'
import Link from 'next/link'

type LayoutProps = {
  children?: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ title = 'Ethan Huang', children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='author' content='Ethan Huang' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content='Ethan Huang' />
        <meta
          property='og:description'
          content="I'm a Full Stack developer with experience in DevOps, Backend, Frontend and mobile development."
        />
        <meta property='og:type' content='website' />
      </Head>
      <div className='flex flex-col h-screen justify-between m-0'>
        <TopBar isOpen={isOpen} onOpen={() => {}} onClose={() => {}} setIsOpen={setIsOpen} />
        <div className={`grid gap-1 flex-grow ${isOpen ? 'grid-cols-5' : 'grid-cols-3'}`}>
          <SideNav isOpen={isOpen} onOpen={() => {}} onClose={() => {}} setIsOpen={setIsOpen} />
          <div className={`${isOpen ? 'col-span-4' : 'col-span-2'}`}>
            <main>{children}</main>
          </div>
          <Footer isOpen={isOpen} onOpen={() => {}} onClose={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default Layout
