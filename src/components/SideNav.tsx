import React from 'react'
import Link from 'next/link'

export interface NavProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  onOpen: () => void
  onClose: () => void
}

const SideNav = ({ isOpen, setIsOpen, onOpen, onClose }: NavProps): JSX.Element => {
  return (
    <div className='col-span-1 justify-start flex flex-col items-end pt-14'>
      {/* <Link href='/note' className='my-link text-2xl md:text-3xl justify-start justify-self-end' onClick={() => setIsOpen(true)}> */}
      {/*   <button className='hover:text-primary-500'>Note</button> */}
      {/* </Link> */}
      <Link href='/about' className='my-link text-2xl md:text-3xl justify-start justify-self-end' onClick={() => setIsOpen(true)}>
        <button className='hover:text-primary-500'>about</button>
      </Link>
      <Link href='/blog' className='my-link text-2xl md:text-3xl justify-start justify-self-end' onClick={() => setIsOpen(true)}>
        <button className='hover:text-primary-500'>writing</button>
      </Link>
      <Link href='/project' className='my-link text-2xl md:text-3xl justify-start justify-self-end' onClick={() => setIsOpen(true)}>
        <button className='hover:text-primary-500'>project</button>
      </Link>
    </div>
  )
}

export default SideNav
