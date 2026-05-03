import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import { Title } from '@/components/Text';
import { Product } from '@/sanity.types';
import { getDealProducts } from '@/sanity/queries'
import React from 'react'

const DealPage = async() => {
  const products:Product[] = await getDealProducts(); 
  return (
    <div className='py-10 bg-deal-bg'>
      <Container>
        <Title className='text-xl md:text-xl  underline underline-offset-4   uppercase tracking-wide  mb-5'>Hot deals of the week</Title>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5'>
          {
            
            products?.map((product) =>(
              
              <ProductCard key={product?._id} product={product}></ProductCard>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default DealPage