import fetchPonyfill from "fetch-ponyfill";
import { NextResponse } from "next/server";

const API_URL = process.env.WORDPRESS_API_URL!;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL 플러그인을 활성화
  const res = await fetchPonyfill().fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function GET() {
  const data = await fetchAPI(`
    query category {
      categories {
        nodes {
          link
          name
          slug
        }
      }
    }
  `);
  return NextResponse.json(data.categories);
}

// export async function GET() {
//   const data = await fetchAPI(`
//     query AllPosts {
//       posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
//         edges {
//           node {
//             title
//             excerpt
//             slug
//             date
//           }
//         }
//       }
//     }
//   `);

//   return NextResponse.json(data.posts);
// }
