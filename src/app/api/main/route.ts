import { NextResponse } from "next/server";
import { fetchAPI } from "@/app/api/index";

export async function GET() {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
          }
        }
      }
    }
  `);

  return NextResponse.json(data.posts);
}
