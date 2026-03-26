"use client"
import { BRAND_QUERY_RESULT, Category } from '@/sanity.types'
import React, { useState } from 'react'
import Container from './Container';
import { Title } from './Text';
import CategoryList from './shop/CategoryList';
import BrandList from './shop/BrandList';
import PriceList from './shop/PriceList';
import { useSearchParams } from 'next/navigation';
interface Props{
  categories : Category[];
  brands : BRAND_QUERY_RESULT;
}

const Shop = ({categories, brands}: Props) => {
const searchParams = useSearchParams();
const brandParams = searchParams?.get("brand");
const [products, setProducts]= useState([]);
const [loading, setLoading]= useState(false);
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const [selectedBrand, setSelectedBrand]= useState(brandParams || null);
const [selectedPrice, setSelectedPrice] = useState(null);

  console.log("shop page", categories, brands)
  return (
    <div className='border-t'>
      <Container className='mt-5'>
        <div className="sticky top-0 z-10 mb-5">
          <div className='flex items-center justify-between'>
            <Title className='text-xl md:text-2xl'>Get the products as your needs</Title>
            <button className='text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkColor/60 hoverEffect cursor-pointer'>Reset Filter</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50 ">
            <div className="md:sticky md:min-w-64 md:top-20 md:self-start pb-5 md:border-r md:h-[calc(100vh-160px)] md:overflow-y-auto border-r-shop_btn_dark_green/50 scrollbar-hide">
            {/* categoryList */}
            <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryList>
            {/* BrandList */}
            <BrandList brands={brands} setSelectedBrand={setSelectedBrand} selectedBrand={selectedBrand}></BrandList>
            {/* PriceList */}
            <PriceList selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}></PriceList>
            </div>
            <div className="">prdouct</div>
        </div>
      </Container>
    </div>
  )
}

export default Shop