"use client";

import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./ProductPrice";
import ProductTags from "./ProductTags";
import ProductReviews from "./ProductReviews";
import { TProduct } from "@/lib/types/products";
import { useState } from "react";
import { ImageWithFallback } from "@/common/ImageWithFallback";

type Props = {
  product: TProduct;
  onAddToCart: () => void;
};

export default function ProductDetail({ product, onAddToCart }: Props) {
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
          <button className="fixed bottom-6 right-6 bg-black text-white py-3 px-6 rounded-full shadow-lg cursor-pointer">
            Go to Cart
          </button>
        </Link>
      )}
    </div>
  );
}
