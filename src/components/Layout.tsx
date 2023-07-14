import React from 'react'
import Head from 'next/head'
import Footer from '@components/Footer'
import TopBar from '@components/TopBar'

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
      <div className='flex flex-wrap flex-col'>
        <TopBar isOpen={false} onOpen={() => {}} onClose={() => {}} />
        {!isOpen && <main>{children}</main>}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
