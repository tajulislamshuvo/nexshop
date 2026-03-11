import React from 'react'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, Subtitle } from './Text'
import { categoriesData, quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { Button } from './ui/button'

const Footer = () => {
  return (
    
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FooterTop></FooterTop>
        <div className='py-10 grid grid-cols-1 md:grid-cols-4'>
        <div className="space-y-4">
        
          <Logo></Logo>
        
        <SubText className="text-gray-600 text-sm">Elevate every room with nexShop's premium furniture where style meets everyday comfort</SubText>
        <SocialMedia className='text-darkColor/60 ' iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green" tooltipClassName="bg-darkColor text-white"></SocialMedia>
        </div>


        <div className=''>
          <Subtitle>Quick Links</Subtitle>
          <ul className='space-y-3 mt-4'>
            {
              quickLinksData?.map((item, index)=>(
                <li key={index}>
                  <Link href={item?.href} className='hover:text-shop_light_green hoverEffect font-medium text-gray-600'>{item?.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className=''>
          <Subtitle>Catagories</Subtitle>
          <ul className='space-y-3 mt-4'>
            {
              categoriesData?.map((item, index)=>(
                <li key={index}>
                  <Link href={`categories/${item?.href}`} className='hover:text-shop_light_green hoverEffect font-medium text-gray-600'>{item?.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='space-y-4'>
          <Subtitle>Newsletter</Subtitle>
          <SubText>Subscribe to our newsletter to receive updates and exclusive offers.</SubText>
          <form className='space-y-2.5'>
            <input type="email" placeholder='Enter your email' className='border px-7 py-2 w-full rounded-lg' required/>
            <Button className='w-full'>Subscribe</Button>
          </form>
        </div>
        </div>
      </div>
      <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()}{" "}
            <Logo className='text-sm'></Logo>
            
            . All rights reserved.
          </div>
        </div>
        
    </footer>
  )
}

export default Footer