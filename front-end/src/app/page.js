import { Banners } from "./components/Banners";
import { CtaPrimary } from "./components/CtaPrimary";
import { Hero } from "./components/Hero";
import { PopularProducts } from "./components/PopularProducts";
import { Sale } from "./components/Sale";
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
    </main>
  );
}
