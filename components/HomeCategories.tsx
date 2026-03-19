import React from 'react'
import { Title } from './Text'
import { Category } from '@/sanity.types'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const HomeCategories = ({categories}:{categories:Category[]}) => {
  return (
    <div className='bg-white border border-shop_light_green/20 my-10 md:my-20 p-5 lg:p-7 rounded-md'>
      <Title className='text-xl md:text-3xl border-b pb-4 mb-4'>Popular categories</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {categories.map((category) => 
        <div key={category._id} className='bg-shop_light_bg flex p-5 items-center gap-3 group'>
          {category?.image && (
            <div className='overflow-hidden border border-shop_orange/30 hover:border-shop_orange hoverEffect w-20 h-20 p-1'>
              <Link href={`/category/${category?.slug?.current}`}>
              <Image
              src={urlFor(category?.image).url()}
              alt='categoryImage'
              width={500}
              height={500}
              className='w-full h-full object-contain group-hover:scale-110 hoverEffect'
              ></Image>
              </Link>
            </div>
          )}

          <div className='space-y-1'>
            <Link href={`/category/${category?.slug?.current}` } className='hover:underline hoverEffect'><h3 className='text-base font-semibold'>{category?.title}</h3></Link>
            
            <p className='text-sm'><span className='font-bold text-shop_dark_green'>{`(${category?.productCount})`}</span> items available</p>
          </div>

        </div>)}
      </div>
    </div>
  )
}

export default HomeCategories