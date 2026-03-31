"use client"

import useStore from '@/store'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  const {items} = useStore();
  return (
    <Link href={"/cart"} className='relative group'>
      <ShoppingCart  className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
      <span className='absolute -top-1 -right-1 bg-shop_light_green text-white rounded-full text-xs font-semibold h-3.5 w-3.5 flex items-center justify-center'>{items?.length ? items.length : 0}</span>
    </Link>
  )
}

export default CartIcon