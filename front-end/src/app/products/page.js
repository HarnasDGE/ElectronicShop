"use client";

import { GridWrapper } from "../components/GridWrapper";
import { OptionProducts } from "../components/OptionsProducts";
import { SubPageBar } from "../components/SubPageBar";
import { WidthWrapper } from "../components/WidthWrapper";
import { FilterByPrice } from "../components/FilterByPrice";
import { FilterByColors } from "../components/FilterByColors";
import { FilterByCategories } from "../components/FilterByCategories";
import { FilterByBrands } from "../components/FilterByBrands";
import { CtaSecondary } from "../components/CtaSecondary";
import { products } from "../data/products";
import { Suspense, useState } from "react";
import { ProductsGrid } from "../components/ProductsGrid"; // <-- Import ProductsGrid bez filtrowania w tym miejscu
import { EventsSidebar } from "../components/EventsSidebar";

export default function Home() {
  const [sidebarSide, setSidebarSide] = useState("LEFT");

  const Sidebar = () => (
    <Suspense fallback={<div>Loading</div>}>
      <div className="bg-backgroundSidebar rounded-2xl p-10 flex flex-col gap-7">
        <EventsSidebar />
        <FilterByCategories />
        <FilterByColors />
        <FilterByPrice />
        <FilterByBrands />
      </div>
    </Suspense>
  );

  return (
    <div className="flex flex-col ">
      <SubPageBar title="Products" />
      <WidthWrapper>
        <OptionProducts
          onFilterClick={() =>
            setSidebarSide((prevState) => (prevState ? false : "LEFT"))
          }
          onSidebarSideClick={setSidebarSide}
        />
      </WidthWrapper>
      {sidebarSide ? (
        <GridWrapper sidebar={sidebarSide} className="py-8 ">
          {sidebarSide === "LEFT" && <Sidebar />}
          <Suspense fallback={<div>Loading...</div>}>
            <ProductsGrid products={products} />
          </Suspense>
          {sidebarSide === "RIGHT" && <Sidebar />}
        </GridWrapper>
      ) : (
        <WidthWrapper className="py-5">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductsGrid products={products} />
          </Suspense>
        </WidthWrapper>
      )}
      <CtaSecondary />
    </div>
  );
}
