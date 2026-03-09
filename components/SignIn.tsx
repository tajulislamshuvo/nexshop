"use client"
import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
  return (
    <SignInButton mode='modal'>
      <button className='text-sm font-semibold hover:text-darkColor hover:cursor-pointer text-shop_light_green hoverEffect'>Login</button>
    </SignInButton>

  )
}

export default SignIn