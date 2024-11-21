import { getPostById } from "@/app/api/getPostById";
import { getPostByParam } from "@/app/api/getPostByParam";
import { BannerOne } from "@/app/components/BannerOne";
import { CtaThird } from "@/app/components/CtaThird";
import { GridWrapper } from "@/app/components/GridWrapper";
import { InstagramNarrow } from "@/app/components/InstagramNarrow";
import { PostDisplay } from "@/app/components/PostDisplay";
import { RecentPosts } from "@/app/components/RecentPosts";
import { Search } from "@/app/components/Search";
import { SocialLinks } from "@/app/components/SocialLinks";
import { SubPageBar } from "@/app/components/SubPageBar";
import { SuggestNearlyPosts } from "@/app/components/SuggestNearlyPosts";
import { Tags } from "@/app/components/Tags";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";

export default async function PostContent({ params }) {
  const { postParam } = params; // Assuming 'slug' is used as the dynamic route param

  const fetchedPost = await getPostByParam(postParam.toString());
  const serializedPost = await serialize(fetchedPost.content);

  const nextPost = await getPostById(fetchedPost.nextPostId);
  const previousPost = await getPostById(fetchedPost.previousPostId);
  return (
    <main>
      <SubPageBar title={fetchedPost.title} />
      <GridWrapper className="pt-20" sidebar="right">
        <div>
          <div className="relative">
            <Image
              src={fetchedPost.image}
              width={300}
              height={300}
              className="max-h-[400px] w-full rounded-2xl shadow"
            />
            <div className="absolute bottom-5 left-5 text-mainText text-base font-bold bg-secondary rounded-2xl px-3 py-1">
              {new Date(fetchedPost.date).toLocaleDateString()}
            </div>
          </div>
          <PostDisplay mdxSource={serializedPost} />
          <div className="flex justify-between itemx-center">
            <ul className="flex gap-7 py-5">
              {fetchedPost.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1 font-bold uppercase border-2 rounded-3xl w-fit"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <SocialLinks />
          </div>
          <SuggestNearlyPosts
            previousArticle={previousPost}
            newerArticle={nextPost}
          />
        </div>
        <div className="flex flex-col gap-7">
          <Search />
          <RecentPosts />
          <Tags />
          <InstagramNarrow />
          <BannerOne />
        </div>
      </GridWrapper>
      <CtaThird />
    </main>
  );
}
