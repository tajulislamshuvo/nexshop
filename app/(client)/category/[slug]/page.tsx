import CategoryProducts from '@/components/CategoryProducts';
import Container from '@/components/Container';
import { Title } from '@/components/Text';
import { getCategories } from '@/sanity/queries'
import React from 'react'

const categoryPage = async({params} : {params: Promise<{slug:string}>}) => {
  const {slug} = await params;
  const categories = await getCategories()
  return (
    <div className='py-10'>
      <Container>
        <Title className='text-xl md:text-2xl tracking-wide'>Product by category:{" "} <span className='font-bold text-green-600 capitalize tracking-wide'>{slug && slug}</span></Title>

        <CategoryProducts categories={categories} slug={slug}></CategoryProducts>
      </Container>
    </div>
  )
}

export default categoryPage