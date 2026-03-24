import React from 'react'
import PriceFormatter from './PriceFormatter';

interface Props{
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({price, discount, className}: Props) => {
  return (
    <div>
      <div className={`flex items-center gap-2 ${className}`}>
        <PriceFormatter amount={price} className={`text-shop_dark_green ${className}`}></PriceFormatter>
        {price && discount && (
          <PriceFormatter amount={price + (discount * price) /100} className={`line-through text-xs font-normal text-shop_light_text ${className}`}></PriceFormatter>
        )}
      </div>
    </div>
  )
}

export default PriceView