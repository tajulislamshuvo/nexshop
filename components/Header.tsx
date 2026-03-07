import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <header className='bg-white py-4 border-b border-b-black/50'>
      <Container className='flex items-center justify-between '>
        {/* logo */}
        <Logo></Logo>
        {/* navbutton */}
        <HeaderMenu></HeaderMenu>
        {/* navAdmin */}
        <div>Others</div>
      </Container>
    </header>
  )
}

export default Header