"use client"

import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props{
  product: Product;
  className?:string;
}

const AddToCartButton = ({product, className}: Props) => {
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () =>{
    window.alert("added")
  }
  return (
    <div>
      <Button onClick={handleAddToCart} disabled={isOutOfStock} className={cn("w-full bg-shop_dark_green/80 text-shop_light_bg border border-shop_dark_green/80 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect", className)}>
        <ShoppingBag></ShoppingBag>
      {isOutOfStock ? "Out of stock" : "Add to cart"}
      </Button>
    </div>
  )
}

export default AddToCartButton