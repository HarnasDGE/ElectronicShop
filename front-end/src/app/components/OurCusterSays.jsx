import { Carousel } from "./Carousel";
import { ReviewCard } from "./ReviewCard";
import { WidthWrapper } from "./WidthWrapper";

export const OurCustomerSays = () => {
  return (
    <WidthWrapper>
      <h2 className="mb-11">Our Custer Says</h2>
      <Carousel itemsCount={2} pagination="geometry" prefixId="customerSays">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Carousel>
    </WidthWrapper>
  );
};
