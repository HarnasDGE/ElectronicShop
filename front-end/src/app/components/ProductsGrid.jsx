"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { ProductCard } from "./ProductCard";

export const ProductsGrid = ({ products }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page")) || 1;
  const perPage = parseInt(searchParams.get("perPage")) || 8;

  const type = searchParams.get("type");
  const color = searchParams.get("color");
  const brands = searchParams.get("brand")?.split(",") || [];
  const minPrice = parseInt(searchParams.get("minPrice") || "0", 10);
  const maxPrice = parseInt(searchParams.get("maxPrice") || "10000", 10);
  const event = searchParams.get("event"); // Jeśli chcemy też filtrować po event

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

  // Zamiast użycia setCurrentProducts w useEffect, obliczamy produkty tutaj
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentProducts = filteredProducts.slice(start, end); // <-- zmiana tutaj

  const allProductsCount = filteredProducts.length;

  const handlePageChange = (newPage) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", newPage);
    window.history.pushState(
      {},
      "",
      `${pathname}?${newSearchParams.toString()}`
    );
  };

  return (
    <div>
      {filteredProducts.length < 1 && (
        <p>Products not found, change your search criteria.</p>
      )}
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} buttonShown={false} />
        ))}
      </div>
      <div className="pagination-controls flex justify-center mt-4">
        {[...Array(Math.ceil(allProductsCount / perPage))].map((_, index) => (
          <button
            key={index}
            className={`px-7 py-6 mx-1 ${
              page === index + 1
                ? "bg-activePagination text-mainText"
                : "bg-backgroundPagination"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
