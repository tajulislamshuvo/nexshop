import { productType } from '@/constants/data'
import Link from 'next/link'
import React from 'react'

interface Props {
  selectedTab: string;
  onTabSelect: (tab:string) => void
}

const HomeTabBar = ({selectedTab, onTabSelect}: Props) => {
  return (
    <div className='flex items-center justify-between flex-wrap gap-5'>
      <div className='flex items-center gap-3 text-sm font-semibold flex-wrap'>
        {
          productType.map((item) =>(
            <button onClick={() => onTabSelect(item.title)} key={item.title} className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedTab === item.title ? "border border-shop_light_green text-white bg-shop_light_green" : "border border-shop_light_green/30 bg-shop_light_green/10"}`}>{item.title}</button>
          ))
        }
      </div>
      <Link href={"/shop"} className={`border bg-shop_light_green/10 border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect`}>See all</Link>
    </div>
  )
}

export default HomeTabBar