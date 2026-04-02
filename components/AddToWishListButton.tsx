import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types'
import useStore from '@/store';
import { Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const AddToWishListButton = ({product, className} : {product: Product; className?:string}) => {

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
    <div className={cn("absolute top-2 right-2 ", className)}>
      <div onClick={handleFavourite} className={`p-2.5 rounded-full hover:bg-shop_dark_green hover:text-white hover:bg-shop_dark_green/80 hoverEffect ${existingProduct ? "bg-shop_dark_green/80 text-white" : "bg-darkColor/10"}`}>
        <Heart size={15}></Heart>
      </div>
    </div>
  )
}

export default AddToWishListButton