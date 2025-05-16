"use client";

import { TProduct } from "@/lib/types/products";
import { ProductCard } from "@/components/Products/ProductCard";

type ProductCardGridProps = {
  products: TProduct[];
  loading: boolean;
};

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

export function ProductCardGrid({ products, loading }: ProductCardGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
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
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
