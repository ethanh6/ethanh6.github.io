import React from 'react'
import Head from 'next/head'
import Container from '@components/Container'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
// import Script from "next/script";

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
      <Nav isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} />
      <div className='flex flex-wrap flex-col'>
        {!isOpen && <main>{children}</main>}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
