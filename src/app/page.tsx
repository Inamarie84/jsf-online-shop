"use client";

import { fetchProducts } from "@/lib/api/fetchProducts";
import { ProductCardGrid } from "@/components/ProductCardGrid/ProductCardGrid";
import { TProduct } from "@/lib/types/products";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data.data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Featured Products
      </h1>

      <ProductCardGrid products={products} loading={loading} />
    </main>
  );
}
