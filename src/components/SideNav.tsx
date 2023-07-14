import React from 'react'
import Link from 'next/link'

export interface NavProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const SideNav = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
  return (
    <div className='col-span-1 justify-start flex flex-col items-end pt-14'>
      <Link href='/about' className='my-link text-2xl md:text-3xl justify-start justify-self-end'>
        <div className='hover:text-primary-500'>About</div>
      </Link>
      <Link href='/blog' className='my-link text-2xl md:text-3xl justify-start justify-self-end'>
        <div className='hover:text-primary-500'>Blog</div>
      </Link>
      <Link href='/note' className='my-link text-2xl md:text-3xl justify-start justify-self-end'>
        <div className='hover:text-primary-500'>Note</div>
      </Link>
      <Link href='/project' className='my-link text-2xl md:text-3xl justify-start justify-self-end'>
        <div className='hover:text-primary-500'>Project</div>
      </Link>
      <Link href='/contact' className='my-link text-2xl md:text-3xl justify-start justify-self-end'>
        <div className='hover:text-primary-500'>Contact</div>
      </Link>
    </div>
  )
}

export default SideNav
