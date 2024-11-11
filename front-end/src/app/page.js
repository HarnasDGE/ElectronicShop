import { Adventages } from "./components/Adventages";
import { BannerFive } from "./components/BannerFive";
import { Banners } from "./components/Banners";
import { CtaPrimary } from "./components/CtaPrimary";
import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { Instagram } from "./components/Instagram";
import { LatestNews } from "./components/LatestNews";
import { OfferProducts } from "./components/OfferProducts";
import { OurCustomerSays } from "./components/OurCusterSays";
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
      <Faq />
      <LatestNews />
      <OurCustomerSays />
      <Adventages />
      <Instagram />
    </main>
  );
}
