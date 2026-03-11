import { cn } from '@/lib/utils'
import React from 'react'

export const Title = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <h2 className={cn("text-3xl md:text-4xl text-shop_dark_green capitalize tracking-wide  font-bold font-sans", className)}>{children}</h2>
  )
};


export const Subtitle = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <h3 className={cn("font-semibold text-gray-900  font-sans", className)}>{children}</h3>
  )
};


export  const SubText = ({
  children, className
}:{children:React.ReactNode, className?:string}) =>{
    return <p className={cn("text-gray-600 text-sm", className)}>{children}</p>
}

// export  {Title}