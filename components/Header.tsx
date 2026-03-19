import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavouriteButton from './FavouriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, Show, UserButton } from '@clerk/nextjs'

const Header = async() => {
  const user = await currentUser();
  console.log(user)
  return (
    <header className='bg-white/70 py-4 sticky top-0 z-50 backdrop-blur-md'>
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
          <ClerkLoaded>
            <Show when="signed-in">
              <UserButton />
            </Show>
            {
              !user && <SignIn></SignIn>
            }
          
          </ClerkLoaded>
          
        </div>
      </Container>
    </header>
  )
}

export default Header