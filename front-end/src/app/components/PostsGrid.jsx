"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function PostsGrid({ posts, postsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const maxPageButtons = 5;

  const getPaginationRange = () => {
    const totalVisiblePages = Math.min(maxPageButtons, totalPages);
    let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
    let endPage = startPage + totalVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - totalVisiblePages + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const handlePageChange = (page) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", page);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState(null, "", newUrl);
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-3xl overflow-hidden"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={100}
                height={400}
                layout="responsive"
                className="w-full max-h-[400px] object-cover aspect-video"
              />
              <div className="absolute bottom-5 left-5 bg-secondary text-white px-2 py-1 text-sm rounded">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.desc}</p>
              <Link
                href={`/blog/${post.param}`}
                className="uppercase font-bold"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Paginacja */}
      <div className="flex justify-center items-center mt-8">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 mx-2 bg-secondary text-white rounded-md"
          >
            &lt;
          </button>
        )}

        {getPaginationRange().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 mx-1 rounded-md ${
              page === currentPage
                ? "bg-secondary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 mx-2 bg-secondary text-white rounded-md"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}
