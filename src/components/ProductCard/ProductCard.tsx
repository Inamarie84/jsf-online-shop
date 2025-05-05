// src/components/ProductCard.tsx
import { TProduct } from "@/lib/types/products";
import Image from "next/image";
import Link from "next/link";
import { FALLBACK_IMAGE_URL } from "@/common/common";

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
    <Link href={`/product/${id}`}>
      <div className="relative border rounded-lg shadow hover:shadow-lg overflow-hidden cursor-pointer flex flex-col h-full">
        <div className="relative w-full h-48">
          <Image
            src={image?.url || FALLBACK_IMAGE_URL}
            alt={image?.alt || title}
            fill
            className="object-cover"
          />
          {hasDiscount && (
            <div className="absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercentage}%
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {hasDiscount && (
                <span className="line-through text-gray-500 text-sm">
                  ${price.toFixed(2)}
                </span>
              )}
              <span className="font-bold">${discountedPrice.toFixed(2)}</span>
            </div>
            <p className="text-yellow-500 text-sm">⭐ {rating}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {description}
            </p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-200 rounded-full px-2 py-0.5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {reviews.length > 0 && (
            <p className="text-xs text-gray-500 mt-2">
              {reviews.length} review{reviews.length > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
