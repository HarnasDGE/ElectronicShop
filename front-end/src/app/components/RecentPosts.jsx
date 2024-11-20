import { useEffect, useState } from "react";
import { Divider } from "./Divider";
import { getPosts } from "../api/getPosts";
import Image from "next/image";

export const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    // Pobierz dostępne posty przy montowaniu komponentu
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      const sortedPosts = fetchedPosts.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setRecentPosts(sortedPosts.slice(0, 4));
    }
    fetchPosts();
  }, []);

  return (
    <div className="mt-12 border-2 border-gray rounded-3xl py-8 h-fit">
      <h2 className="text-2xl font-bold mb-6 px-7">Recent Posts</h2>
      <Divider />
      <div className="grid gap-6 px-7 pt-7">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex items-center">
            <Image
              src={post.image}
              width={50}
              height={100}
              alt={post.title}
              className="w-24 h-24 object-cover aspect-square rounded-3xl mr-4"
            />
            <div>
              <p className="text-secondary text-sm mb-1">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <h3 className="text-lg font-semibold">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
