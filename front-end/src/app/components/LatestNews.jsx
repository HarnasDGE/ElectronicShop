import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";
import { ArticleCard } from "./ArticleCard";

export const LatestNews = () => {
  return (
    <div className="bg-backgroundSecondary py-20">
      <WidthWrapper>
        <div className="w-full flex items-center justify-between">
          <h2>Latest News & Blog</h2>
          <Button>
            More Blogs <ArrowRightIcon />
          </Button>
        </div>
        <div className="flex justify-center gap-10 my-10">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </WidthWrapper>
    </div>
  );
};
