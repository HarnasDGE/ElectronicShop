import { Adventages } from "./components/Adventages";
import { Banners } from "./components/Banners";
import { CtaPrimary } from "./components/CtaPrimary";
import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { Instagram } from "./components/Instagram";
import { LatestNews } from "./components/LatestNews";
import { OfferAndTopSellingGroup } from "./components/OfferAndTopSellingGroup";
import { OurCustomerSays } from "./components/OurCustomerSays";
import { OurTrendingBrands } from "./components/OurTrendingBrands";
import { PopularProducts } from "./components/PopularProducts";
import { Sale } from "./components/Sale";
import { SubscribeModalTrigger } from "./components/SubscribeModalTrigger";
import { TrendingCategories } from "./components/TrendingCategories";

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
