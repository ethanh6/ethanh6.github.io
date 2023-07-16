import React from 'react'
import Menu from '@icons/Menu'
import Close from '@icons/Close'
import Link from 'next/link'
import { BiMenu, BiArrowBack } from 'react-icons/bi' // https://react-icons.github.io/react-icons/icons?name=bi

export interface TopBarProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  onOpen: () => void
  onClose: () => void
}

const TopBar = ({ isOpen, setIsOpen, onOpen, onClose }: TopBarProps): JSX.Element => {
  return (
    <div className='w-max flex flex-col item-center justify-center gap-1 p-2 my-10 mx-14 border-t-4 border-slate-400'>
      <div className={`${isOpen ? 'hidden' : 'justify-self-start text-xs md:text-3xl pt-3'}`}>Software Engineer</div>
      <Link href='/' className={'text-2xl md:text-6xl my-link justify-start py-1'} onClick={() => setIsOpen(false)}>
        Ethan Huang
      </Link>
    </div>
  )
}

export default TopBar