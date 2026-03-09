import { Search } from 'lucide-react';
import React from 'react'
// import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div>
      {/* <IoSearchOutline  /> */}
      <Search  className='w-5 h-5 hover:text-shop_light_green hoverEffect '/>
    </div>
  )
}

export default SearchBar