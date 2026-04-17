import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavouriteButton from './FavouriteButton'
// import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { auth, currentUser } from '@clerk/nextjs/server'
// import { ClerkLoaded, Show, UserButton } from '@clerk/nextjs'
// import Link from 'next/link'
// import { Logs } from 'lucide-react'
import { getMyOrders } from '@/sanity/queries'
import HeaderAuth from './HeaderAuth'

const Header = async() => {
  const user = await currentUser();
  console.log(user)
  const {userId} = await auth();
  let orders = null;
  if(userId){
    orders = await getMyOrders(userId); 
  }
  return (
    <header className=' py-4 sticky top-0 z-50 backdrop-blur-md'>
      <Container className='flex text-lightColor items-center justify-between '>
        {/* logo */}
        <div className='w-auto md:1/3 flex items-center gap-1 justify-start md:gap-0'>
          <MobileMenu></MobileMenu>
          <Logo></Logo>
        </div>
        
        {/* navbutton */}
        <HeaderMenu></HeaderMenu>
        {/* navAdmin */}
        <div className='w-auto md:q-1/3 flex items-center justify-end gap-4 md:gap-5'>
          <SearchBar></SearchBar>
          <CartIcon></CartIcon>
          <FavouriteButton></FavouriteButton>
          
             <HeaderAuth orders={orders} />
          
        </div>
      </Container>
    </header>
  )
}

export default Header