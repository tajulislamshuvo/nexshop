import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/Container';
import FavouriteButton from '@/components/FavouriteButton';
import ImageView from '@/components/ImageView';
import PriceView from '@/components/PriceView';
import { getProductBySlug } from '@/sanity/queries';
import { StarIcon } from 'lucide-react';
import React from 'react'

const SingleProductPage = async({params} : {params:Promise<{slug:string}>}) => {
  const {slug} = await params;
  const product = await getProductBySlug(slug);
  return (
    <div>
      <Container className='flex flex-col md:flex-row md:justify-between gap-10 py-10'>
        
          {
            product?.images && <ImageView images={product?.images} isStock={product?.stock}></ImageView>
          }
        
        <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className='space-y-1'>
          <h2 className='text-2xl font-bold'>{product?.name}</h2>
          <p className='text-sm text-gray-600 tracking-wide'>{product?.description}</p>

          <div className="flex items-center gap-0.5 text-xs">
            {[...Array(5)].map((_, index) =>(
              <StarIcon key={index} size={12} className='text-shop_dark_green' fill={"#3b9c3c"}></StarIcon>
            ))}
            <p className='font-semibold'>{`(120)`}</p>
          </div>
        </div>


        <div className='space-y-2 border-t border-b border-gray-200 py-5'>
          <PriceView price={product?.price} discount={product?.discount} className='text-lg font-bold'></PriceView>
          <p className={`px-4 py-1.5 inline-block text-xs font-semibold rounded-lg ${product?.stock == 0 ? "text-red-600 bg-red-100" : "text-green-600 bg-green-100"}`}>{(product?.stock as number) > 0 ? "In stock" : "Out of stock"}</p>
        </div>
        <div className="flex items-center justify-between gap-2.5 lg:gap-5">
          <AddToCartButton className='flex-1' product={product}></AddToCartButton>
          <FavouriteButton showProduct={true} product={product}></FavouriteButton>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default SingleProductPage