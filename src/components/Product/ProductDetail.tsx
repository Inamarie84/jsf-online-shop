"use client";

import Link from "next/link";
import ProductPrice from "./ProductPrice";
import ProductTags from "./ProductTags";
import ProductReviews from "./ProductReviews";
import { TProduct } from "@/lib/types/products";
import { useState } from "react";
import { ImageWithFallback } from "@/common/ImageWithFallback";

type ProductDetailProps = {
  /** Full product entity for the detail page */
  product: TProduct;
  /** Callback fired when user clicks “Add to Cart” */
  onAddToCart: () => void;
};

/**
 * Full product detail view with image, title, description, pricing,
 * tags, reviews and add-to-cart handler. Shows a floating “Go to Cart”
 * CTA after adding to cart.
 */
export default function ProductDetail({
  product,
  onAddToCart,
}: ProductDetailProps) {
  const [showGoToCart, setShowGoToCart] = useState(false);

  const handleClick = () => {
    onAddToCart();
    setShowGoToCart(true);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
        <ImageWithFallback
          src={product.image?.url}
          alt={product.image?.alt}
          title={product.title}
          className="object-cover"
        />
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
        {product.title}
      </h2>
      <p className="text-yellow-500 text-sm mt-1">⭐ {product.rating}</p>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        {product.description}
      </p>

      <ProductPrice
        price={product.price}
        discountedPrice={product.discountedPrice}
      />
      <ProductTags tags={product.tags} />
      <ProductReviews reviews={product.reviews} />

      <button onClick={handleClick} className="main-button mt-6">
        Add to Cart
      </button>

      {showGoToCart && (
        <Link href="/cart">
          <button className="fixed bottom-6 sm:bottom-10 md:bottom-14 right-4 sm:right-6 bg-black text-white py-3 px-6 rounded-full shadow-lg cursor-pointer z-50">
            Go to Cart
          </button>
        </Link>
      )}
    </div>
  );
}
