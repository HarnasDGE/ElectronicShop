"use client";
import { MDXRemote } from "next-mdx-remote";

export const PostDisplay = ({ mdxSource }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
};
