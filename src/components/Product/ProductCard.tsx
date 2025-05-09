"use client";

import { TProduct } from "@/lib/types/products";
import Image from "next/image";
import Link from "next/link";
import { FALLBACK_IMAGE_URL } from "@/common/common";

import ProductPrice from "@/components/Product/ProductPrice";
import ProductTags from "@/components/Product/ProductTags";

type ProductCardProps = {
  product: TProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    title,
    description,
    price,
    discountedPrice,
    image,
    rating,
    tags,
    reviews,
  } = product;

  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <div className="relative border rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col h-full">
      <Link href={`/product/${id}`} className="relative w-full h-48 block">
        <Image
          src={image?.url || FALLBACK_IMAGE_URL}
          alt={image?.alt || title}
          fill
          className="object-cover"
        />
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-discount text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercentage}%
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <ProductPrice price={price} discountedPrice={discountedPrice} />
          <p className="text-yellow-500 text-sm">⭐ {rating}</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {description}
          </p>
          <ProductTags tags={tags} />

          {/* Display number of reviews */}
          {reviews?.length > 0 && (
            <p className="text-xs text-gray-500 mt-2">
              {reviews.length} review{reviews.length > 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* View Item Button as a Link */}
        <Link
          href={`/product/${id}`}
          className="mt-4 bg-black text-white rounded-lg py-2 px-4 text-sm text-center hover:bg-opacity-80"
        >
          View Item
        </Link>
      </div>
    </div>
  );
}
