import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <div className=' bg-shop-light-pink'>
      <h2 className='text-xl font-semibold'>Home</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente obcaecati enim nam, autem repudiandae aut officia voluptatum sit voluptatem placeat temporibus earum architecto? Illo a quasi aspernatur odit nisi explicabo.</p>
      <Button>Check out</Button>
    </div>
    </Container>
  )
}

export default Home