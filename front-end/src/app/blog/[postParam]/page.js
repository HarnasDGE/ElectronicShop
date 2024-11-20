import { getPostByParam } from "@/app/api/getPostByParam";
import { PostDisplay } from "@/app/components/PostDisplay";
import { serialize } from "next-mdx-remote/serialize";

export default async function PostContent({ params }) {
  const { postParam } = params; // Assuming 'slug' is used as the dynamic route param

  const fetchedPost = await getPostByParam(postParam.toString());
  const serializedPost = serialize(fetchedPost.content);
  return (
    <main>
      <PostDisplay mdxSource={serializedPost} />
    </main>
  );
}
