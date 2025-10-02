"use client";

import { TProduct } from "@/lib/types/products";
import { ImageWithFallback } from "@/common/ImageWithFallback";
import Link from "next/link";
import ProductPrice from "@/components/Product/ProductPrice";
import ProductTags from "@/components/Product/ProductTags";

type ProductCardProps = {
  /** Product entity to render in a card */
  product: TProduct;
};

/**
 * Compact, clickable product card.
 * Shows image, title, pricing (with discount), rating, tags, and review count.
 * Card links to the product detail page.
 */
export function ProductCard({ product }: ProductCardProps) {
  const { id, title, price, discountedPrice, image, rating, tags, reviews } =
    product;

  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <div className="relative rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col h-full">
      <Link href={`/product/${id}`} className="relative w-full h-48 block">
        <ImageWithFallback src={image?.url} alt={image?.alt} title={title} />

        {hasDiscount && (
          <div
            className="absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded"
            style={{ backgroundColor: "var(--bg-discount)" }}
          >
            -{discountPercentage}%
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <ProductPrice price={price} discountedPrice={discountedPrice} />
          <p className="text-yellow-500 text-sm">⭐ {rating}</p>
          <ProductTags tags={tags} />

          {reviews?.length > 0 && (
            <p className="text-xs text-gray-500 mt-2">
              {reviews.length} review{reviews.length > 1 ? "s" : ""}
            </p>
          )}
        </div>

        <Link
          href={`/product/${id}`}
          className="main-button mt-4 text-sm text-center"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}
