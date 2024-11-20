"use client";
import { useState, useEffect } from "react";
import { getPosts } from "../api/getPosts";
import { SubPageBar } from "../components/SubPageBar";
import { GridWrapper } from "../components/GridWrapper";
import { CtaPrimary } from "../components/CtaPrimary";
import { Search } from "../components/Search";
import { RecentPosts } from "../components/RecentPosts";
import { BannerOne } from "../components/BannerOne";
import { Tags } from "../components/Tags";
import { InstagramNarrow } from "../components/InstagramNarrow";
import { BannerFour } from "../components/BannerFour";
import { PostsGrid } from "../components/PostsGrid";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  return (
    <main className="flex-grow">
      <SubPageBar title="Blog" />
      <GridWrapper className="py-10">
        <div className="flex flex-col gap-7">
          <Search />
          <RecentPosts />
          <BannerOne />
          <Tags />
          <InstagramNarrow />
          <BannerFour />
        </div>
        <div>
          <PostsGrid posts={posts} postsPerPage={6} />
        </div>
      </GridWrapper>
      <CtaPrimary />
    </main>
  );
}
