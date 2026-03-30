"use client"
import { BRAND_QUERY_RESULT, Category, Product } from '@/sanity.types'
import React, { useEffect, useState } from 'react'
import Container from './Container';
import { Title } from './Text';
import CategoryList from './shop/CategoryList';
import BrandList from './shop/BrandList';
import PriceList from './shop/PriceList';
import { useSearchParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { Loader2 } from 'lucide-react';
import NoProductAvailable from './NoProductAvailable';
import ProductCard from './ProductCard';
interface Props{
  categories : Category[];
  brands : BRAND_QUERY_RESULT;
}

const Shop = ({categories, brands}: Props) => {
const searchParams = useSearchParams();
const brandParams = searchParams?.get("brand");
const [products, setProducts]= useState<Product[]>([]);
const [loading, setLoading]= useState(false);
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const [selectedBrand, setSelectedBrand]= useState(brandParams || null);
const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

const fetchProducts = async () =>{
  setLoading(true)
  try {
    let minPrice = 0;
    let maxPrice = 10000;
    if(selectedPrice){
      const [min, max] = selectedPrice.split("-").map(Number);
      minPrice = min;
      maxPrice = max;
    }

    const query = `*[_type == "product" && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id)) && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id)) && price >= $minPrice && price <= $maxPrice]  | order(name asc) {
    ..., "categories": categories[]->title
    }`;

    const data = await client.fetch(query, {selectedCategory, selectedBrand, minPrice, maxPrice}, {next:{revalidate: 0}})

    setProducts(data)

  } catch (error) {
    console.log("shop product fetchig error ", error)
  }finally{
    setLoading(false)
  }
};
console.log(products)
useEffect(() =>{
  fetchProducts()
}, [selectedCategory, selectedBrand, selectedPrice])

  // console.log("shop page", categories, brands)
  return (
    <div className='border-t'>
      <Container className='mt-5'>
        <div className="sticky top-0 z-10 mb-5">
          <div className='flex items-center justify-between'>
            <Title className='text-xl md:text-2xl'>Get the products as your needs</Title>

            {(selectedCategory !== null || selectedBrand !== null || selectedPrice !== null) &&
            <button onClick={() =>{
                setSelectedCategory(null);
                setSelectedBrand(null);
                setSelectedPrice(null)
            }} className='text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkColor/60 hoverEffect cursor-pointer'>Reset Filter</button>
            }
            
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
            <div className="flex-1 py-5">
              <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 no-scrollbar">
                {
                  loading ? <div className='p-20 flex flex-col gap-2 items-center justify-center bg-white'>
                    <Loader2 className='w-10 h-10 text-shop_dark_green animate-spin'></Loader2>
                    <p className='font-semibold tracking-wide text-base'>Product is loading.....</p>
                  </div> : 
                    products.length > 0 ? 
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {products.map((product) => (
                          <ProductCard key={product?._id} product={product}></ProductCard>
                        ))}
                    </div> : <NoProductAvailable className='bg-white'></NoProductAvailable>
                    
                }
              </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop