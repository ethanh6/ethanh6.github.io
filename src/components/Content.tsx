import React from 'react'

type ContentProps = {
  children?: React.ReactNode
  title?: string
}

const Content: React.FC<LayoutProps> = ({ title = 'Ethan Huang', children }) => {
  return (
    <div className='grid grid-cols-6'>
      <div className='col-start-2 col-span-4'>
        <div className='m-2.5 text-6xl text-right' as='h2'>
          {title}
        </div>
        {children}
      </div>
    </div>
  )
}

export default Content
