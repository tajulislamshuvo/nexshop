import { defineQuery } from "next-sanity";

const BRAND_QUERY = defineQuery(`*[_type =="brand"] | order(title desc)`)

const LATEST_BLOG_QUERY = defineQuery(`*[_type == "blog" && isLatest == true] | order(name asc){
  ..., blogcategories[]->{
  _id,title}
  }`)


  const DEAL_PRODUCTS = defineQuery(
    `*[_type == "product" && status == "hot"] | order(name asc){
    ..., "categories": categories[]->title
    }`
  )


  const PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`
  )
 
  const BRAND_QUERY1 = defineQuery(`*[_type == "product" && slug.current == $slug]{
    "brandName": brand->title
    } `)


    const MY_ORDERS_QUERY = defineQuery(`*[_type == "order" && clerkUserId ==$userId] | order(orderData desc){
      ...,
      products[]{
      ..., product->}
      }`)

      const GET_ALL_BLOG = defineQuery(`*[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
        ..., blogcategories[]->{
        title}
        }`)

    const SINGLE_BLOG_QUERY = defineQuery(`*[_type == "blog" && slug.current == $slug][0]{
      ...,
      author->{
      name, image
      },
      blogcategories[]->{
      title,
      "slug" : slug.current
      },
      }`)    



      const BLOG_CATEGORIES = defineQuery(
  `*[_type == "blog"]{
     blogcategories[]->{
    ...
    }
  }`
);

const OTHERS_BLOG_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
  && slug.current != $slug
]|order(publishedAt desc)[0...$quantity]{
...
  publishedAt,
  title,
  mainImage,
  slug,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`);

export {BRAND_QUERY, LATEST_BLOG_QUERY, DEAL_PRODUCTS, PRODUCT_BY_SLUG_QUERY, BRAND_QUERY1, MY_ORDERS_QUERY, GET_ALL_BLOG, SINGLE_BLOG_QUERY, BLOG_CATEGORIES,OTHERS_BLOG_QUERY }