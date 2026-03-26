import { Product } from '@/sanity.types'
import { Heart } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

const FavouriteButton = ({showProduct = false, product}: {
  showProduct: boolean;
  product: Product | undefined | null
}) => {
  return (
    <>
    {
      !showProduct? (
        <Link href={"/wishlist"} className='relative group'>
      <Heart className='w-5 h-5'/>
      <span className='absolute -top-1 -right-1.5 bg-shop_light_green text-white rounded-full text-xs font-semibold h-3.5 w-3.5 flex items-center justify-center'>0</span>
    </Link>
      ) : (
        <button className='group relative hover:text-shop_light_green hoverEffect border border-shop_light_green/80 hover:border-shop_light_green p-1.5 rounded-sm'><Heart className='text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-.5 w-5 h-5'/></button>
      )
    }
    
    </>
  )
}

export default FavouriteButton