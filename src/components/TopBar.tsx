import React from 'react'
import Menu from '@icons/Menu'
import Close from '@icons/Close'
import Link from 'next/link'
import { BiMenu, BiArrowBack } from 'react-icons/bi' // https://react-icons.github.io/react-icons/icons?name=bi

export interface TopBarProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const TopBar = ({ isOpen, onOpen, onClose }: TopBarProps): JSX.Element => {
  return (
    <div className='w-max flex flex-col item-center justify-center gap-1 p-2 m-10 border-t-4 border-slate-400'>
      <div className='justify-self-start text-xs md:text-sm pt-3'>Software Engineer</div>
      <Link href='/' className='my-link text-2xl md:text-3xl justify-start p-1'>
        Ethan Huang
      </Link>
    </div>
  )
}

export default TopBar
