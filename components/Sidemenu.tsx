"use client"
import React, { FC } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks';
interface SidebarProps{
  isOpen: boolean,
  
  onClose: () => void;
}

const Sidemenu:FC<SidebarProps> = ({isOpen, onClose}) => {
  const pathname = usePathname();
  const sideBarRef = useOutsideClick<HTMLDivElement>(onClose)
  return (
    <div className={`fixed h-screen z-50 w-full bg-black/50 shadow-xl left-0  inset-y-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect text-white/80`}>
      
      <div ref={sideBarRef} className='min-w-68 max-w-80 bg-black h-screen p-10 border-r border-shop_light_green flex flex-col gap-6'>
        <div className='flex items-center justify-between gap-5'>
          <Logo className='text-white' spanDesign="group-hover:text-white"></Logo>
        <button onClick={onClose} className='hover:text-shop_light_green hoverEffect'><X/></button>
        </div>

        <div className='flex flex-col space-y-3.5 font-semibold tracking-wide'>
          {headerData?.map((item) => (
            <Link href={item.href} key={item.title} className={`hover:text-shop_light_green hoverEffect ${pathname === item.href && "text-shop_light_green"}`}>{item.title}</Link>
          ))}
        </div>
        <SocialMedia></SocialMedia>
      </div>

      
      </div>
  )
}

export default Sidemenu