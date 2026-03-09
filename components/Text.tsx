import { cn } from '@/lib/utils'
import React from 'react'

const Title = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("text-3xl md:text-4xl text-shop_dark_green capitalize tracking-wide  font-bold font-sans", className)}>{children}</div>
  )
}

export default Title