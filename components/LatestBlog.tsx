import React from 'react'
import { Title } from './Text'
import { getLatestBlogs } from '@/sanity/queries'
import { Blog } from '@/sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

const LatestBlog = async() => {
  const blogs:Blog[] = await getLatestBlogs()
  console.log(blogs)
  return (
    <div className='mb-10 lg:mb-20'>
      <Title className='text-xl md:text-3xl'>Latest Blog</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
        {blogs?.map((blog) => (
          <div key={blog._id}>
            {blog?.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`}>
              <Image
              src={urlFor(blog?.mainImage).url()}
              width={500}
              height={500}
              alt='blogImage'
              className='w-full max-w-90  object-cover'
              ></Image>
              </Link>
            )}
            <div>
              <div>
                <div>
                  {blog?.blogcategories?.map((item, index) =>(
                    <p key={index}>{item?.title}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default LatestBlog