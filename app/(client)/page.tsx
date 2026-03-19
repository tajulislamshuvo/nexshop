import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import HomeCategories from '@/components/HomeCategories'
import LatestBlog from '@/components/LatestBlog'
import ProductGrid from '@/components/ProductGrid'
import ShopByBrands from '@/components/ShopByBrands'
import { getCategories } from '@/sanity/queries'
import React from 'react'

const Home = async() => {
  const categories = await getCategories(6);
  console.log(categories)
  return (
    <Container>
      <HomeBanner></HomeBanner>
      <div className='py-10'>
      <ProductGrid></ProductGrid>
      <HomeCategories categories={categories}></HomeCategories>
      <ShopByBrands></ShopByBrands>
      <LatestBlog></LatestBlog>
      </div>
      
    </Container>
  )
}

export default Home