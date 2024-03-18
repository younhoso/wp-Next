import {getAllPostsWithSlug} from '@/pages/api/main'

export default async function HomePage() {
  const data = await getAllPostsWithSlug();
  console.log(data.edges[0].node)

  // const {edges} = allPosts;
  // const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);
  // console.log('heroPost:', heroPost)
  // console.log('morePosts:', morePosts)

  return (
    <>
      HomePage Main
    </>
  );
}
