import { GridWrapper } from "../components/GridWrapper";
import { OptionProducts } from "../components/OptionsProducts";
import { SubPageBar } from "../components/SubPageBar";
import { WidthWrapper } from "../components/WidthWrapper";
import { FilterByPrice } from "../components/FilterByPrice";
import { FilterByColors } from "../components/FilterByColors";
import { FilterByCategories } from "../components/FilterByCategories";
import { FilterByCollections } from "../components/FilterByCollections";
import { FilterByBrands } from "../components/FilterByBrands";
import { CtaSecondary } from "../components/CtaSecondary";
import { products } from "../data/products";
import { Suspense } from "react"; // Importujemy Suspense

export default function Home() {
  return (
    <div className="flex flex-col ">
      <SubPageBar title="Products" />
      <WidthWrapper>
        <OptionProducts />
      </WidthWrapper>
      <GridWrapper className="py-8 ">
        <div className="bg-backgroundSidebar rounded-2xl p-10 flex flex-col gap-7">
          <FilterByCollections />
          <FilterByCategories />
          <FilterByColors />
          <FilterByPrice />
          <FilterByBrands />
        </div>

        {/* Dodajemy Suspense wokół komponentu ProductsGrid */}
        <Suspense fallback={<div>Ładowanie...</div>}>
          <ProductsGrid products={products} />
        </Suspense>
      </GridWrapper>
      <CtaSecondary />
    </div>
  );
}
