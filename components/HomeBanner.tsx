import React from 'react'
import Title from './Text'
import Link from 'next/link'
import Image from 'next/image'
import banner1 from "../images/banner/banner1.png"

const HomeBanner = () => {
  return (
    <div className='flex justify-between items-center py-16 md:py-0 bg-[#e8f5e9] rounded-lg px-10 lg:px-26'>
      <div className='space-y-5'>
      <Title className="">Don't Miss Out Up to 50% Off <br />
      on Top Headphones
      </Title>
      <Link href={"/shop"} className='bg-shop_dark_green/90 text-white/90 px-5 py-3 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect '>Buy Now</Link>
    </div>
    <div>
      <Image src={banner1} alt='banner' className='hidden md:inline-flex w-56'></Image>
    </div>
    </div>


  )
}

export default HomeBanner