import Container from '@/components/Container'
import { Title } from '@/components/Text'
import React from 'react'

const singleBlogPage = async({params}: {params: Promise<{slug:string}>}) => {
const {slug} = await params
  return (
    <div>
      <Container>
        <Title>SIngle</Title>
        <p>{slug}</p>
      </Container>
    </div>
  )
}

export default singleBlogPage