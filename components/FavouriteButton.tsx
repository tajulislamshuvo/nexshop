"use client"
import { Product } from '@/sanity.types'
import useStore from '@/store';
import { Heart } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const FavouriteButton = ({showProduct = false, product}: {
  showProduct?: boolean;
  product?: Product | undefined | null
}) => {
    const {favoriteProduct, addToFavorite} = useStore();
    const [existingProduct, setExistingProduct] = useState<Product | null >(null);

  useEffect(() => {
    const availableProduct = favoriteProduct?.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableProduct || null);
  }, [product, favoriteProduct]);


      const handleFavourite = (e: React.MouseEvent<HTMLSpanElement>) =>{
        e.preventDefault();
        if(product?._id){
          addToFavorite(product).then(() =>{
            toast.success(existingProduct ? "Product removed successfully" : "Product added successfully")
          })
        }
      }
    
  
  return (
    <>
    {
      !showProduct? (
        <Link href={"/wishlist"} className='relative group'>
      <Heart className='w-5 h-5'/>
      <span className='absolute -top-1 -right-1.5 bg-shop_light_green text-white rounded-full text-xs font-semibold h-3.5 w-3.5 flex items-center justify-center'>{favoriteProduct?.length}</span>
    </Link>
      ) : (
        <button 
        onClick={handleFavourite} 
        className='group relative hover:text-shop_light_green hoverEffect border border-shop_light_green/80 hover:border-shop_light_green p-1.5 rounded-sm'>
          {
            existingProduct ? <Heart fill='#3b9c3c' className='text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-.5 w-5 h-5'/>: <Heart className='text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-.5 w-5 h-5'/> 
          }
        
        </button>
      )
    }
    
    </>
  )
}

export default FavouriteButton