import { NextResponse } from "next/server";
import { fetchAPI } from "@/app/api/index";

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
