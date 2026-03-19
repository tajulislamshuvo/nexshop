"use client"
import React, { useEffect, useState } from 'react';
import HomeTabBar from './HomeTabBar';
import { productType } from '@/constants/data';
import { client } from '@/sanity/lib/client';
import { Loader2 } from 'lucide-react';
import NoProductAvailable from './NoProductAvailable';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import { Product } from '@/sanity.types';
import ProductCard from './ProductCard';


const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0].title || "")

  const query = `*[_type == "product" && variant==$variant] | order(name desc){
  ..., "categories": categories[]->title
}`;

  const params = {variant: selectedTab.toLowerCase()};

  useEffect(() =>{
    const fetchData = async() =>{
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response)
      } catch (error) {
        console.error("Product fetching error" , error)
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [selectedTab])
  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab}></HomeTabBar>
      {loading ? (
        <div className='flex items-center justify-center rounded-lg py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10'>
          <div className='flex items-center justify-center space-x-2'>
            <Loader2 className='w-5 h-5 animate-spin text-shop_dark_green'></Loader2>
            <span className='text-shop_dark_green/80'>Product is loading....</span>
          </div>
        </div>
      ) : (
        products?.length ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5  mt-10'>
        {products.map((product) =>(
          <AnimatePresence key={product?._id}>
            <motion.div layout initial={{opacity: 0.2}} animate={{opacity:1}} exit={{opacity:0}}>
                <ProductCard product={product}></ProductCard>
            </motion.div>
          </AnimatePresence>
        ))}
        </div>
        ) : (<NoProductAvailable selectedTab={selectedTab}></NoProductAvailable>)
      )}
    </div>
  )
}

export default ProductGrid