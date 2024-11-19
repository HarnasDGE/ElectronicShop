import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

export const TabProductDescription = ({ mdxSource }) => {
  return (
    <div className="flex ">
      <div className="p-4 rounded-lg mt-6">
        {/* Renderowanie przetworzonych danych MDX */}
        <MDXRemote {...mdxSource} components={{ Image }} />
      </div>
    </div>
  );
};
