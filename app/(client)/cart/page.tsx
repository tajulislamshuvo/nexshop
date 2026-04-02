"use client"
import Container from '@/components/Container';
import EmptyCart from '@/components/EmptyCart';
import NoAccessToCart from '@/components/NoAccessToCart';
import { Title } from '@/components/Text';
import { Address } from '@/sanity.types';
import useStore from '@/store';
import { useAuth, useUser } from '@clerk/nextjs';
import { ShoppingBag } from 'lucide-react';
import React, { useState } from 'react'

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
        <div className="lg:col-span-2 rounded-lg">Products</div>
        <div className="">Summery</div>
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