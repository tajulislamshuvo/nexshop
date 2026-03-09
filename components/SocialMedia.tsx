import { Facebook, Github, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Props {
  className?: string,
  iconClassName?: string,
  tooltipClassName?: string

}

const socialLink = [
  {
    title:"Youtube",
  href: "#",
  icon: <Youtube className='w-4 h-4'></Youtube>
  },
  {
    title:"Github",
  href: "https://github.com/tajulislamshuvo/",
  icon: <Github className='w-4 h-4'></Github>
  },
  {
    title:"Linkedin",
  href: "https://www.linkedin.com/in/tajul-islam-624003395/",
  icon: <Linkedin className='w-4 h-4'></Linkedin>
  },
  {
    title:"Facebook",
  href: "https://www.facebook.com/hsjgsgjxhkdxkhmxb",
  icon: <Facebook className='w-4 h-4'></Facebook>
  },

]

const SocialMedia = ({className, iconClassName, tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5 ", className)}>
        {socialLink.map((item) =>(
          <Tooltip  key={item?.title}>
            <TooltipTrigger asChild>
              <Link href={item.href} target='_blank' rel='noopener norefferer' className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", iconClassName)}>{item.icon}</Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor", tooltipClassName)}>{item.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia