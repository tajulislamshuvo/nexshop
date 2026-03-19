// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
// import { defineLive } from "next-sanity";
// import { client } from "./client";

// const token = process.env.SANITY_API_READ_TOKEN;
// if (!token) {
//   throw new Error("SANITY_API_READ_TOKEN is not set");
// }

// export const { sanityFetch, SanityLive } = defineLive({
//   client,
//   serverToken: token,
//   browserToken: token,
//   fetchOptions: {
//     revalidate: 0,
//   },
// });


import { client } from "./client";

type SanityFetchProps = {
  query: string;
  params?: Record<string, unknown>;
};

export async function sanityFetch({ query, params = {} }: SanityFetchProps) {
  try {
    const data = await client.fetch(query, params);
    return { data };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return { data: null };
  }
}