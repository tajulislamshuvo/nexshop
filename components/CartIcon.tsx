import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href={"/cart"} className='relative group'>
      <ShoppingCart  className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
      <span className='absolute -top-1 -right-1 bg-shop_light_green text-white rounded-full text-xs font-semibold h-3.5 w-3.5 flex items-center justify-center'>0</span>
    </Link>
  )
}

export default CartIcon