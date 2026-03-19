import { defineQuery } from "next-sanity";

const BRAND_QUERY = defineQuery(`*[_type =="brand"] | order(title desc)`)

const LATEST_BLOG_QUERY = defineQuery(`*[_type == "blog" && isLatest == true] | order(name asc){
  ..., blogcategories[]->{
  _id,title}
  }`)

export {BRAND_QUERY, LATEST_BLOG_QUERY}