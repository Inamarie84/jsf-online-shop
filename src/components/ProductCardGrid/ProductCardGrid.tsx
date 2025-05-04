"use client";

import { TProduct } from "@/lib/types/products";
import { ProductCard } from "@/components/ProductCard/ProductCard";

type ProductCardGridProps = {
  products: TProduct[];
  loading: boolean;
};

export function ProductCardGrid({ products, loading }: ProductCardGridProps) {
  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
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
