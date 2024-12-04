import { BannerFive } from "./BannerFive";
import { GridWrapper } from "./GridWrapper";
import { OfferProducts } from "./OfferProducts";
import { TopSellingProducts } from "./TopSellingProducts";

export const OfferAndTopSellingGroup = () => {
  return (
    <GridWrapper sidebar="right">
      <div>
        <OfferProducts />
        <TopSellingProducts />
      </div>

      <BannerFive />
    </GridWrapper>
  );
};
