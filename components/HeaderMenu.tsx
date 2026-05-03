"use client"
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
  const pathName = usePathname();
  return (


    <div className='hidden md:inline-flex w-1/3 items-center justify-center gap-7 text-sm capitalize font-semibold text-lightColor'>
      {headerData.map((item) => (
        <Link key={item.title} href={item.href} className={`${pathName === item.href && "text-shop_light_green"} hover:text-shop_light_green hoverEffect group relative`}>{item.title}
        <span className={`absolute h-0.5 w-0 bg-shop_light_green -bottom-0.5 right-1/2 group-hover:w-1/2 group-hover:right-0 hoverEffect ${pathName === item.href && "w-1/2"}`}></span>
        <span className={`absolute h-0.5 w-0 bg-shop_light_green -bottom-0.5 left-1/2 group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathName === item.href && "w-1/2"}`}></span>
        </Link>
      ))}
    </div>
    
  )
}

export default HeaderMenu