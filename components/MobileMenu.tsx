"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import Sidemenu from './Sidemenu'

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
   <>
    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
      <AlignLeft className='hover:text-darkColor hoverEffect cursor-pointer block md:hidden'></AlignLeft>
      </button>
      <div className='md:hidden'>
        <Sidemenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        ></Sidemenu>
      </div>
   </>
    
  )
}

export default MobileMenu