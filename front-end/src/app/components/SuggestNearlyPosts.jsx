import Link from "next/link";
import Image from "next/image";

export const SuggestNearlyPosts = ({ previousArticle, newerArticle }) => {
  return (
    <div className="flex justify-between items-center w-full py-5 gap-7">
      {previousArticle && (
        <Link
          href={`/blog/${previousArticle.id}`}
          className="flex flex-grow gap-4 py-4 px-6 bg-lightGray rounded-3xl "
        >
          <Image
            src={previousArticle.image}
            height={50}
            width={50}
            className="w-1/3 rounded-3xl aspect-square"
          />
          <div>
            <h3>{previousArticle.title}</h3>
            <p className="uppercase">Previous Post</p>
          </div>
        </Link>
      )}
      {newerArticle && (
        <Link
          href={`/blog/${newerArticle.id}`}
          className="flex flex-grow gap-4 py-4 px-6 bg-lightGray rounded-3xl"
        >
          <div className="text-right">
            <h3>{newerArticle.title}</h3>
            <p className="uppercase">Next Post</p>
          </div>
          <Image
            src={newerArticle.image}
            height={50}
            width={50}
            className="w-1/3 rounded-3xl aspect-square"
          />
        </Link>
      )}
    </div>
  );
};
