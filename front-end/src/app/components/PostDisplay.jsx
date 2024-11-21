"use client";
import { MDXRemote } from "next-mdx-remote";
import { DynamicImageText } from "./DynamicImageText";

export const PostDisplay = ({ mdxSource }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} components={{ DynamicImageText }} />
    </div>
  );
};
