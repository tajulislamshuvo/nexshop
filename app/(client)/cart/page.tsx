"use client"
import Container from '@/components/Container';
import EmptyCart from '@/components/EmptyCart';
import FavouriteButton from '@/components/FavouriteButton';
import NoAccessToCart from '@/components/NoAccessToCart';
import PriceFormatter from '@/components/PriceFormatter';
import QuantityButtons from '@/components/QuantityButtons';
import { Title } from '@/components/Text';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Address } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import useStore from '@/store';
import { useAuth, useUser } from '@clerk/nextjs';
import { ShoppingBag, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    
    resetCart,
  } = useStore();
  const [loading, setLoading] = useState(false);
   const groupedItems = useStore((state) => state.getGroupedItems());
   const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  function handleResetCart(){
    const confirmed = window.confirm("Are you sure, you want to reset your cart");
    if(confirmed){
      resetCart();
      toast.success("Cart reset successfully")
    }
  }
  return (
    <div className='bg-gray-50 '>
      {isSignedIn ? (
  groupedItems?.length > 0 ? (
    <Container>
      <div className="flex items-center gap-2 py-5">
        <ShoppingBag className="text-darkColor" />
        <Title className='text-xl md:text-2xl'>Shopping Cart
        </Title>
      </div>

      <div className="grid lg:grid-cols-3 md:gap-8">
        <div className="lg:col-span-2 rounded-lg">
          <div className="border bg-white rounded-md">
            {
              groupedItems?.map(({product}) =>{
                const itemCount = getItemCount(product?._id);
                return(
                  <div key={product?._id} className='border-b p-2.5 last:border-b-0'>
                    <div className='flex flex-1 items-start justify-between gap-2 h-38 md:h-44'>
                      {
                        product?.images && (
                          <Link href={`/product/${product?.slug?.current}`} className='border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group'>
                            <Image
                            src={urlFor(product?.images[0]).url()}
                            alt='productImage'
                            width={500}
                            height={500}
                            loading='lazy'
                            className='w-28 md:w-40 h-36 md:h-41 object-cover group-hover:scale-105 hoverEffect'
                            >

                            </Image>
                          </Link>
                        )
                      }
                      <div className="h-full flex flex-1 flex-col justify-between py-1">
                        <div className="flex flex-col gap-0.5 md:gap-1.5">
                          <h2 className='font-semibold text-base line-clamp-1'>{product?.name}</h2>
                          <p className='text-sm capitalize'>Variant: <span className='font-bold'>{product?.variant}</span></p>
                          <p className='text-sm capitalize'>Status: <span className='font-bold'>{product?.status}</span></p>
                        </div>
                        <div className="">
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span>
                                <FavouriteButton showProduct={true} product={product} className='group relative text-black hoverEffect border-none hover:border-none p-1.5 rounded-full bg-gray-200 '></FavouriteButton>
                                  </span>
                                    
                                  
                                </TooltipTrigger>
                                <TooltipContent className='font-bold'>Add to favourite</TooltipContent>
                              </Tooltip>

                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Trash size={32} onClick={()=>{
                                    deleteCartProduct(product?._id);
                                    toast.success("Product deleted successfully")
                                  }} className=' mr-1 text-red-400 hover:text-red-600 hoverEffect p-1.5 bg-red-50 rounded-full'></Trash>
                                </TooltipTrigger>
                                <TooltipContent className='font-bold bg-red-600'>
                                  Delete product
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>

                      <div className='h-full flex flex-col gap-3 items-center '>
                        <PriceFormatter className='font-bold text-lg' amount={(product?.price as number) * itemCount}></PriceFormatter>
                        <QuantityButtons product={product}></QuantityButtons>
                      </div>
                    </div>
                  </div>
                )
              })
            }

            <div className="p-2.5">
              <Button onClick={()=>handleResetCart()} className='mt-5  font-semibold' variant='destructive'>Reset cart</Button>
            </div>
          </div>
        </div>
         {/* order summery for dakstop view */}
        <div className="">
          <div className="lg:col-span-1">
            <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
              <h2 className='text-xl font-semibold mb-4'>Order Summery</h2>
              <div>
                <div className='flex items-center justify-between'>
                  <span>SubTotal</span>
                  <PriceFormatter amount={getSubTotalPrice()}></PriceFormatter>
                </div>
                <div className='flex items-center justify-between'>
                  <span>Discount</span>
                  <PriceFormatter amount={getSubTotalPrice() - getTotalPrice()}></PriceFormatter>
                  
                  
                </div>
                <Separator></Separator>
                <div className='flex items-center justify-between'>
                  <span>Total</span>
                  <PriceFormatter amount={useStore?.getState().getTotalPrice()}></PriceFormatter>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* order summery for mobile view */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white pt-2">
            <div className="bg-white p-4 rounded-lg border mx-4">
              <h2>Order summery</h2>
            </div>
        </div>
      </div>
      {/* Add your cart items table or list here */}
    </Container>
  ) : (
    <Container className="max-w-full px-0">
      <EmptyCart />
    </Container>
  )
) : (
  <NoAccessToCart />
)}
    </div>
  )
}

export default CartPage