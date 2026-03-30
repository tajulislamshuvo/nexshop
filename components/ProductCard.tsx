// import { Product } from '@/sanity.types'
// import { urlFor } from '@/sanity/lib/image'
// import { Flame, StarIcon } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import AddToWishListButton from './AddToWishListButton'
// import { Title } from './Text'
// import PriceView from './PriceView'
// import AddToCartButton from './AddToCartButton'

// const ProductCard = ({product}: {product: Product}) => {
//   // console.log(product)
//   return (
//     <div className='border border-[1px] border-dark_blue/20 rounded-md bg-white group'>
//       <div className='relative group overflow-hidden bg-shop_light_bg'>
//         {product?.images && (
//          <Link href={`/product/${product?.slug?.current}`}>
//           <Image
//            src={urlFor(product?.images[0]).url()} 
//            alt="ProductImage" 
//            loading='lazy' 
//            width={700} 
//            height={700}
//            className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
//            >
            
//           </Image>
//          </Link>
//         )}

//         <AddToWishListButton product={product}></AddToWishListButton>
//         {product?.status === "sale" && (<p className='absolute top-2 left-2 z-10 text-sm border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect'>Sale</p>)}

//         {product?.status === "new" && (<p className='absolute top-2 left-2 z-10 text-sm border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect'>New!</p>)}


//         {product?.status === "hot" && (<Link href={"/deal"} className="absolute  top-2 left-2 p-1  rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect">
//         <Flame size={18} fill="#fb6c08" className='text-shop_orange/50 group-hover:text-shop_orange hoverEffect'></Flame>
//         </Link>)}
//       </div>
//       <div className='p-3 flex flex-col gap-2'>
//         {product?.categories && (<p className='uppercase line-clamp-1 text-xs text-shop_light_text'> {product?.categories?.map((cat) => cat).join(", ")}</p>)}
//       <Title className='text-sm md:text-sm line-clamp-1'>{product?.name}</Title>
//       <div className='flex items-center gap-3'>
//         <div className='flex items-center gap-0.5'>
//           {[...Array(5)].map((_, index) => (<StarIcon key={index} size={12} className={index < 4 ? "text-shop_lighter_green" : "text-shop_light_text"} fill={index < 4 ? "#93D991" : "#ababab"}></StarIcon>))}
//         </div>
//         <p className='text-shop_light_text text-xs tracking-wide'>5 Reviews</p>
//       </div>
//       <div className='flex items-center gap-2.5'>
//         <p>In stock</p>
//         <p className={`${product?.stock === 0 ? "text-red-600" : "text-shop_light_green font-semibold"}`}>{(product?.stock as number) > 0 ? product.stock : "Unavailable"}</p>
//       </div>

//           <PriceView price={product?.price} discount={product?.discount}></PriceView>
//           <AddToCartButton product={product} className="w-36 rounded-full"></AddToCartButton>
//       </div>
         
      
//     </div>
//   )
// }

// export default ProductCard


// =============chatgpt==============

// import { Product } from '@/sanity.types'
// import { urlFor } from '@/sanity/lib/image'
// import { Flame, StarIcon } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import AddToWishListButton from './AddToWishListButton'
// import { Title } from './Text'
// import PriceView from './PriceView'
// import AddToCartButton from './AddToCartButton'

// const ProductCard = ({ product }: { product: Product }) => {
//   return (
//     <div className='group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200'>

//       {/* Image Section */}
//       <div className='relative bg-shop_light_bg overflow-hidden'>
//         {product?.images && (
//           <Link href={`/product/${product?.slug?.current}`}>
//             <Image
//               src={urlFor(product?.images[0]).url()}
//               alt="ProductImage"
//               width={500}
//               height={500}
//               className={`w-full h-56 object-contain transition-transform duration-300 ${
//                 product?.stock !== 0
//                   ? "group-hover:scale-110"
//                   : "opacity-40"
//               }`}
//             />
//           </Link>
//         )}

//         {/* Wishlist */}
//         <div className="absolute top-3 right-3">
//           <AddToWishListButton product={product} />
//         </div>

//         {/* Status Badge */}
//         {product?.status === "sale" && (
//           <span className='absolute top-3 left-3 text-xs px-3 py-1 bg-red-100 text-red-600 rounded-full font-medium'>
//             Sale
//           </span>
//         )}

//         {product?.status === "new" && (
//           <span className='absolute top-3 left-3 text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full font-medium'>
//             New
//           </span>
//         )}

//         {product?.status === "hot" && (
//           <Link href="/deal" className="absolute top-3 left-3 bg-orange-100 p-2 rounded-full">
//             <Flame size={16} className='text-orange-500' fill="#fb6c08" />
//           </Link>
//         )}
//       </div>

//       {/* Content Section */}
//       <div className='p-4 flex flex-col gap-3'>

//         {/* Category */}
//         {product?.categories && (
//           <p className='text-xs uppercase text-gray-400 line-clamp-1'>
//             {product.categories.join(", ")}
//           </p>
//         )}

//         {/* Title */}
//         <Title className='text-sm md:text-sm line-clamp-1'>
//           {product?.name}
//         </Title>

//         {/* Rating */}
//         <div className='flex items-center justify-between'>
//           <div className='flex items-center gap-1'>
//             {[...Array(5)].map((_, index) => (
//               <StarIcon
//                 key={index}
//                 size={12}
//                 className={index < 4 ? "text-green-500" : "text-gray-300"}
//                 fill={index < 4 ? "#22c55e" : "#d1d5db"}
//               />
//             ))}
//           </div>
//           <span className='text-xs text-gray-400'>5 reviews</span>
//         </div>

//         {/* Stock */}
//         <div className='flex items-center justify-between text-sm'>
//           <span className='text-gray-500'>Stock:</span>
//           <span
//             className={`font-medium ${
//               product?.stock === 0
//                 ? "text-red-500"
//                 : "text-green-600"
//             }`}
//           >
//             {(product?.stock as number) > 0
//               ? product.stock
//               : "Unavailable"}
//           </span>
//         </div>

//         {/* Price */}
//         <PriceView price={product?.price} discount={product?.discount} />

//         {/* Button */}
//         <AddToCartButton
//           product={product}
//           className="w-full rounded-lg py-2 text-sm font-medium hover:scale-[1.02] transition"
//         />
//       </div>
//     </div>
//   )
// }

// export default ProductCard


import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Flame, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AddToWishListButton from './AddToWishListButton';
import { Title } from './Text';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-shop_light_bg aspect-square">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`} className="block">
            <Image
              src={urlFor(product?.images[0]).url()}
              alt={product?.name || 'Product Image'}
              loading="lazy"
              width={700}
              height={700}
              className={`w-full h-full object-contain transition-transform duration-500 bg-shop_light_bg 
                ${product?.stock !== 0 ? 'group-hover:scale-110' : 'opacity-60'}`}
            />
          </Link>
        )}

        {/* Wishlist Button */}
        <div className="absolute top-3 right-3 z-20">
          <AddToWishListButton product={product} />
        </div>

        {/* Status Badges */}
        {product?.status === 'sale' && (
          <div className="absolute top-3 left-3 z-10">
            <p className="text-xs font-medium px-3 py-1 bg-white/90 backdrop-blur-sm border border-red-200 text-red-600 rounded-full shadow-sm transition-colors hover:bg-red-50">
              Sale
            </p>
          </div>
        )}

        {product?.status === 'new' && (
          <div className="absolute top-3 left-3 z-10">
            <p className="text-xs font-medium px-3 py-1 bg-white/90 backdrop-blur-sm border border-emerald-200 text-emerald-600 rounded-full shadow-sm transition-colors hover:bg-emerald-50">
              New!
            </p>
          </div>
        )}

        {product?.status === 'hot' && (
          <Link
            href="/deal"
            className="absolute top-3 left-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-orange-50 transition-all hover:scale-110"
          >
            <Flame
              size={20}
              fill="#fb6c08"
              className="text-orange-500"
            />
          </Link>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-5">
        {/* Categories */}
        {product?.categories && (
          <p className="uppercase text-[10px] tracking-[1px] text-shop_light_text mb-1 line-clamp-1">
            {product.categories.map((cat) => cat).join(', ')}
          </p>
        )}

        {/* Product Name */}
        <Title className="text-sm md:text-sm leading-tight line-clamp-2 mb-3">
          {product?.name}
        </Title>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-px">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                size={14}
                className={
                  index < 4
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300 fill-gray-300'
                }
              />
            ))}
          </div>
          <p className="text-xs text-shop_light_text">5 Reviews</p>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 text-sm mb-4">
          <span className="text-shop_light_text">Stock:</span>
          <span
            className={`font-medium ${
              (product?.stock as number) > 0
                ? 'text-shop_light_green'
                : 'text-red-600'
            }`}
          >
            {(product?.stock as number) > 0
              ? `${product.stock} in stock`
              : 'Unavailable'}
          </span>
        </div>

        {/* Price */}
        <div className="mb-5">
          <PriceView price={product?.price} discount={product?.discount} />
        </div>

        {/* Add to Cart Button */}
        <div className="mt-auto">
         {/* Button */}
        <AddToCartButton
           product={product}
           className="w-full rounded-lg py-2 text-sm font-medium hover:scale-[1.02] transition"
       />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;