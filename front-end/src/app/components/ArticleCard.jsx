import Image from "next/image";
import { Button } from "./Button";

export const ArticleCard = () => {
  const article = {
    images: ["/images/blog/post1.jpg"],
    title: "The Art of Radiant Refinement",
    date: "August 12, 2024",
    author: "Designthemes",
    desc: "Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus",
    id: 2,
  };
  return (
    <div>
      <Image
        src={article.images[0]}
        width={400}
        height={100}
        className="aspect-video rounded-xl"
        layout="responsive"
      />
      <div className="whitespace-nowrap pt-5 ">
        {article.date} - By ${article.author}
      </div>
      <h3 className="leading-[3.7rem]">{article.title}</h3>
      <p>{article.desc}</p>

      <Button color="black" link={`/post/${article.id}`} className="mt-7">
        Read More
      </Button>
    </div>
  );
};
