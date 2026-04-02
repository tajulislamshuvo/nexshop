"use client"

import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import useStore from '@/store';
import toast from 'react-hot-toast';
import PriceFormatter from './PriceFormatter';
import QuantityButtons from './QuantityButtons';
interface Props{
  product: Product;
  className?:string;
}

const AddToCartButton = ({product, className}: Props) => {
  const {addItem, getItemCount} = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () =>{
    if((product?.stock as number) > itemCount){
      addItem(product);
      toast.success(`${product?.name?.substring(0, 12)}... added successfully`)
    }
  }
  return (
    
      <div className='w-full'>

        {
          itemCount ? (
            <div>
                <div className="flex justify-between items-center">
                  <span className='text-sm text-darkColor/80'>Quantuty</span>
                  <QuantityButtons product={product}></QuantityButtons>
                </div>
                <div className='flex items-center justify-between border-t pt-1'>
                  <span className='text-sm font-semibold'>Subtotal</span>
                  <PriceFormatter amount={product?.price ? product?.price * itemCount : 0}></PriceFormatter>
                </div>
            </div>
          ) : (
            <Button onClick={handleAddToCart} disabled={isOutOfStock} className={cn("w-full bg-shop_dark_green/80 text-shop_light_bg border border-shop_dark_green/80 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect", className)}>
        <ShoppingBag></ShoppingBag>
      {isOutOfStock ? "Out of stock" : "Add to cart"}
      </Button>
          )
        }
      </div>
    
  )
}

export default AddToCartButton