import NoAccessToCart from '@/components/NoAccessToCart'
import WishListProduct from '@/components/WishListProduct'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const WishListPage = async() => {
  const user = await currentUser()
  return (
    <>
    {user ? 
    <WishListProduct></WishListProduct> : 
    <NoAccessToCart detailes='Log in to view your wishlist items. Don&apos;t miss out on your cart products to make the payment!'></NoAccessToCart>}
    </>
  )
}

export default WishListPage