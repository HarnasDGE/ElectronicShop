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
import { Suspense, useState } from "react"; // Importujemy Suspense
import { ProductsGrid } from "../components/ProductsGrid";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [sidebarSide, setSidebarSide] = useState("LEFT");
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const color = searchParams.get("color");
  const brands = searchParams.get("brand")?.split(",") || [];
  const minPrice = parseInt(searchParams.get("minPrice") || "0", 10);
  const maxPrice = parseInt(searchParams.get("maxPrice") || "10000", 10);

  const filteredProducts = products.filter((product) => {
    const matchType = type ? product.category === type : true;
    const matchColor = color ? product.color === color : true;
    const matchBrand =
      brands.length > 0 ? brands.includes(product.brand) : true;
    const matchPrice = product.price >= minPrice && product.price <= maxPrice;
    const matchDiscountPrice =
      product.discount_price >= minPrice && product.discount_price <= maxPrice;
    return (
      matchType && matchColor && matchBrand && matchPrice && matchDiscountPrice
    );
  });

  const Sidebar = () => (
    <div className="bg-backgroundSidebar rounded-2xl p-10 flex flex-col gap-7">
      <FilterByCategories />
      <FilterByColors />
      <FilterByPrice />
      <FilterByBrands />
    </div>
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
          productsLength={filteredProducts.length}
        />
      </WidthWrapper>
      {sidebarSide ? (
        <GridWrapper sidebar={sidebarSide} className="py-8 ">
          {sidebarSide === "LEFT" && <Sidebar />}
          <Suspense fallback={<div>Loading...</div>}>
            <ProductsGrid products={filteredProducts} />
          </Suspense>
          {sidebarSide === "RIGHT" && <Sidebar />}
        </GridWrapper>
      ) : (
        <WidthWrapper className="py-5">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductsGrid products={filteredProducts} />
          </Suspense>
        </WidthWrapper>
      )}

      <CtaSecondary />
    </div>
  );
}
