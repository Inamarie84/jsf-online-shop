"use client";

import { TProduct } from "@/lib/types/products";
import { ProductCard } from "@/components/Products/ProductCard";

type ProductCardGridProps = {
  /** List of products to render */
  products: TProduct[];
  /** When true, shows skeleton placeholders instead of cards */
  loading: boolean;
};

/**
 * Visual placeholder skeleton for a product card while loading.
 */
function SkeletonCard() {
  return (
    <div className="animate-pulse border rounded-lg p-4 shadow flex flex-col gap-3">
      <div className="bg-gray-300 h-48 w-full rounded" />
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
      <div className="h-4 bg-gray-300 rounded w-full" />
      <div className="h-8 bg-gray-300 rounded w-1/2 mt-auto" />
    </div>
  );
}

/** Stable keys for skeletons to avoid index-as-key */
const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"];

/**
 * Responsive grid of product cards with a loading state.
 * - Shows skeletons while `loading` is true
 * - Renders cards when `products` are available
 */
export function ProductCardGrid({ products, loading }: ProductCardGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKELETON_KEYS.map((key) => (
          <SkeletonCard key={key} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
