import { BRAND_QUERY_RESULT } from '@/sanity.types'
import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Title } from '../Text';

interface Props{
brands: BRAND_QUERY_RESULT;
selectedBrand: string | null;
setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const BrandList = ({brands, selectedBrand, setSelectedBrand}: Props) => {
  return (
        <div className='w-full bg-white p-5'>
      <Title className='text-md md:text-lg tracking-wide'>Brands</Title>
      <RadioGroup value={selectedBrand} className='mt-2 space-y-1'>
        {brands.map((brand) => (
            <div onClick={() =>setSelectedBrand(brand?.slug?.current as string)} className="flex items-center gap-3 cursor-pointer" key={brand?._id} >
            <RadioGroupItem value={brand?.slug?.current as string} id={brand?.slug?.current}  className='rounded-sm '/>
              <Label 
              htmlFor={brand?.slug?.current}
              className={`${selectedBrand == brand?.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"}`}
              >{brand?.title}</Label>
              </div>

        ))}

        {
          selectedBrand && (
            <button onClick={() => setSelectedBrand(null)} className='text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect text-left'>Reset selection</button>
          )
        }
      </RadioGroup>
    </div>

  )
}

export default BrandList