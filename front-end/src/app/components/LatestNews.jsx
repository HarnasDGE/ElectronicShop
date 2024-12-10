import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";
import { ArticleCard } from "./ArticleCard";
import { Carousel } from "./Carousel";

export const LatestNews = () => {
  return (
    <div className="bg-backgroundSecondary py-20">
      <WidthWrapper>
        <div className="w-full flex items-center justify-between pb-3">
          <h2>Latest News & Blog</h2>
          <Button>
            More Blogs <ArrowRightIcon />
          </Button>
        </div>
        <Carousel>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Carousel>
      </WidthWrapper>
    </div>
  );
};
