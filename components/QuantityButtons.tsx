"use client"
import { Product } from '@/sanity.types'
import useStore from '@/store';
import React from 'react'
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

interface Props{
  product: Product;
  className?: string
}

const QuantityButtons = ({product, className}: Props) => {
  const {addItem, removeItem, getItemCount} = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock == 0 ;

  const handleAddToCart = () =>{
if((product?.stock as number) > itemCount){
      addItem(product);
      toast.success("Quantity increased successfully")
    }else{
      toast.error("Can not add more than available stock")
    }
  }

  const handleRemoveProduct = () =>{
    removeItem(product?._id);
    if(itemCount > 1){
      toast.success("Quantity decreased successfully")
    }else{
      toast.error(`${product?.name?.substring(0, 12)} removed successfully`)
    }
  }

  return (
    <div className={cn("flex items-center gap-1 pb-1 text-base", className)}>
      <Button variant="outline" size="icon" disabled={itemCount == 0 || isOutOfStock} className='border w-6 h-6 hover:bg-shop_dark_green/20 hoverEffect' onClick={handleRemoveProduct}>
        <Minus></Minus>
      </Button>
      <span className='font-semibold text-sm w-5  text-center'>{itemCount}</span>
     <Button variant="outline" size="icon" disabled={isOutOfStock} className='border w-6 h-6 hover:bg-shop_dark_green/20 hoverEffect' onClick={handleAddToCart}>
        <Plus></Plus>
      </Button>
    </div>
  )
}

export default QuantityButtons