import { Adventages } from "./components/Adventages";
import { BannerFive } from "./components/BannerFive";
import { Banners } from "./components/Banners";
import { CtaPrimary } from "./components/CtaPrimary";
import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { Instagram } from "./components/Instagram";
import { LatestNews } from "./components/LatestNews";
import { OfferAndTopSellingGroup } from "./components/OfferAndTopSellingGroup";
import { OfferProducts } from "./components/OfferProducts";
import { OurCustomerSays } from "./components/OurCusterSays";
import { OurTrendingBrands } from "./components/OurTrendingBrands";
import { PopularProducts } from "./components/PopularProducts";
import { Sale } from "./components/Sale";
import { SubscribeModalTrigger } from "./components/SubscribeModalTrigger";
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
      <OfferAndTopSellingGroup />
      <OurTrendingBrands />
      <Faq />
      <LatestNews />
      <OurCustomerSays />
      <Adventages />
      <Instagram />
      <SubscribeModalTrigger />
    </main>
  );
}
