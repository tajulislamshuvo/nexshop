import React from 'react'
import { Title } from '../Text';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
interface Props{
  selectedPrice: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>
}
const priceArray = [
  { title: "Under $100", value: "0-100" },
  { title: "$100 - $200", value: "100-200" },
  { title: "$200 - $300", value: "200-300" },
  { title: "$300 - $500", value: "300-500" },
  { title: "Over $500", value: "500-10000" },
];

const PriceList = ({selectedPrice ,setSelectedPrice}: Props) => {
  return (
            <div className='w-full bg-white p-5'>
      <Title className='text-md md:text-lg tracking-wide'>Brands</Title>
      <RadioGroup  className='mt-2 space-y-1' value={selectedPrice}>
        {priceArray.map((price, index) => (
            <div onClick={() =>setSelectedPrice(price?.value)} className="flex items-center gap-3 cursor-pointer" key={index} >
            <RadioGroupItem value={price?.value} id={price?.value}  className='rounded-sm '/>
              <Label 
              htmlFor={price?.value}
              className={`${selectedPrice == price?.value ? "font-semibold text-shop_dark_green" : "font-normal"}`}
              >{price?.title}</Label>
              </div>

        ))}

        {
          selectedPrice && (
            <button onClick={() => setSelectedPrice(null)} className='text-sm font-medium mt-2 underline underline-offset-2 decoration-1p hover:text-shop_dark_green hoverEffect text-left'>Reset selection</button>
          )
        }
      </RadioGroup>
    </div>

  )
}

export default PriceList