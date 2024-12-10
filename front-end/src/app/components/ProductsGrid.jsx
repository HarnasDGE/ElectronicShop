"use client";
import { useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";

export const ProductsGrid = ({ products }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page")) || 1;
  const perPage = parseInt(searchParams.get("perPage")) || 8;
  const [currentProducts, setCurrentProducts] = useState([]);
  const allProductsCount = products.length;

  useEffect(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    setCurrentProducts(products.slice(start, end));
  }, [page, perPage, products]);

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
      {products.length < 1 && (
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
