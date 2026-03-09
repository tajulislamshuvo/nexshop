import { Heart } from 'lucide-react'
import React from 'react'

const FavouriteButton = () => {
  return (
    <div className='relative group'>
      <Heart className='w-5 h-5'/>
      <span className='absolute -top-1 -right-1.5 bg-shop_light_green text-white rounded-full text-xs font-semibold h-3.5 w-3.5 flex items-center justify-center'>0</span>
    </div>
  )
}

export default FavouriteButton