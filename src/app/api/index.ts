import fetchPonyfill from "fetch-ponyfill";
const API_URL = process.env.WORDPRESS_API_URL!;

export async function fetchAPI(
  query = "",
  { variables }: Record<string, any> = {}
) {
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
