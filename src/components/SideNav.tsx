import React from 'react'
import Link from 'next/link'

const NavItems: Array<{label: string, url: string, active: boolean}> = [
  {
    label: "Home",
    url: "/",
    active: true,
  },
  {
    label: "About",
    url: "/About",
    active: false,
  },
  {
    label: "Blog",
    url: "/Blog",
    active: false,
  },
  {
    label: "Note",
    url: "/Note",
    active: false,
  },
  {
    label: "Project",
    url: "/Project",
    active: false,
  },
];

export interface NavProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const SideNav = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
  return (
    <div>
      {NavItems.map((item, index) => {
        console.log(item.url)
        return (
          <Link href={item.url} key={index} className="my-link">
              <div className=" hover:text-primary-500 w-10 mx-auto pb-2">
                {item.icon}
              </div>
          </Link>
        )
      })}
    </div>
  )
};

export default SideNav
