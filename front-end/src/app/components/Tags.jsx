"use client";
import { useEffect, useState } from "react";
import { getPosts } from "../api/getPosts";
import { Divider } from "./Divider";

export function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Pobierz dostępne posty przy montowaniu komponentu
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      const allTags = fetchedPosts.flatMap((post) => post.tags);
      const uniqueTags = [...new Set(allTags)].slice(0, 10);
      setTags(uniqueTags);
    }
    fetchPosts();
  }, []);

  return (
    <div className="mt-12 border-2 border-gray rounded-3xl py-8 h-fit">
      <h2 className="text-2xl font-bold mb-6 px-7">Recent Posts</h2>
      <Divider />
      <div className="flex flex-wrap gap-3 p-5">
        {tags.map((tag, index) => (
          <div
            key={index}
            className=" text-secondText border-2 border-gray px-7 py-2 rounded-full uppercase"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
