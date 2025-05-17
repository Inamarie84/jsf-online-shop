"use client";

import { ProductCardGrid } from "@/components/Products/ProductCardGrid";
import { ProductFilterBar } from "@/components/Products/ProductFilterBar";
import { useProducts } from "@/lib/hooks/useProducts";
import { useState } from "react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const { products, loading } = useProducts(searchQuery, sortOption);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8">
        Featured Products
      </h1>

      <ProductFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      <ProductCardGrid products={products} loading={loading} />
    </div>
  );
}
