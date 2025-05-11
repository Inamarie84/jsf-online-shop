"use client";

import { fetchProducts } from "@/lib/api/fetchProducts"; // Adjust if needed
import { ProductCardGrid } from "@/components/Product/ProductCardGrid";
import { ProductFilterBar } from "@/components/Product/ProductFilterBar";
import { TProduct } from "@/lib/types/products";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data.data); // Assuming the data is inside `data.data`
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filter and sort logic
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === "price-low-high") {
        return a.price - b.price;
      }
      if (sortOption === "price-high-low") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className=" md:text-4xl text-center mb-8">Featured Products</h1>

      {/* Product filter bar with search and sort */}
      <ProductFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {/* Display products */}
      <ProductCardGrid products={filteredProducts} loading={loading} />
    </main>
  );
}
