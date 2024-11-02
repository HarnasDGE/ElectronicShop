import { BannerFive } from "./components/BannerFive";
import { Banners } from "./components/Banners";
import { CtaPrimary } from "./components/CtaPrimary";
import { Hero } from "./components/Hero";
import { OfferProducts } from "./components/OfferProducts";
import { OurTrendingBrands } from "./components/OurTrendingBrands";
import { PopularProducts } from "./components/PopularProducts";
import { Sale } from "./components/Sale";
import { TopSellingProducts } from "./components/TopSellingProducts";
import { TrendingCategories } from "./components/TrendingCategories";
import { WidthWrapper } from "./components/WidthWrapper";

export default function Home() {
  return (
    <main className="flex flex-col gap-[50px]">
      <Hero />
      <PopularProducts />
      <CtaPrimary />
      <TrendingCategories />
      <Banners />
      <Sale />
      <WidthWrapper className="flex gap-5">
        <OfferProducts />
        <TopSellingProducts />
        <BannerFive />
      </WidthWrapper>
      <OurTrendingBrands />
    </main>
  );
}
