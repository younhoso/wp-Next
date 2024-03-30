"use client";
import useSWR from "swr";

type PostNode = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
};

type Edge = {
  node: PostNode;
};

type PostData = {
  edges: Edge[];
};

export default function HomePage() {
  const {
    data: naminData,
    isLoading: loading,
    error,
  } = useSWR<PostData>("/api/main");

  if (loading || !naminData) return;

  const { edges } = naminData;
  const heroPost = edges[0]?.node;
  console.log("heroPost:", heroPost);

  return (
    <>
      <div>
        <p>{heroPost.title}</p>
        <p>{heroPost.excerpt}</p>
        <p>{heroPost.date}</p>
      </div>
    </>
  );
}
