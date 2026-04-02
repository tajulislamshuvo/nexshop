import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Logo from './Logo'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const NoAccessToCart = ({detailes = "Log in to view your cart items and checkout. Don't miss out on your favorite products!"} : {detailes?: string}) => {
  return (
    <div className='flex items-center justify-center  py-12 md:py-32 bg-gray-100 p-4'>
      <Card className='w-full max-w-md px-4'>
        <CardHeader className='flex items-center flex-col gap-1'><Logo></Logo>
        <CardTitle className='text-2xl font-bold text-center'>Welcome Back</CardTitle>
        </CardHeader>

        <CardContent className='text-center space-y-3 font-medium text-darkColor/80'>
          <p>{detailes}</p>
          <SignInButton mode='modal'>
          <Button className='w-full'>Sign in</Button>
        </SignInButton>
        </CardContent>
        <CardFooter className='flex flex-col space-y-2'>
          <div className="text-sm text-muted-foreground text-center">Don&rsquo;t have an account</div>
          <SignUpButton mode='modal'>
            <Button variant="outline" className='w-full' size="lg">Create an account</Button>
          </SignUpButton>
        </CardFooter>
        
      </Card>
    </div>
  )
}

export default NoAccessToCart