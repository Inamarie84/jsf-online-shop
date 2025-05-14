"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { showToast } from "@/lib/utils/showToast";
import { TProduct } from "@/lib/types/products";
import { fetchProductById } from "@/lib/api/fetchProductById";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

import SkeletonProduct from "@/components/Product/SkeletonProduct";
import ProductPrice from "@/components/Product/ProductPrice";
import ProductTags from "@/components/Product/ProductTags";
import ProductReviews from "@/components/Product/ProductReviews";

const BackButton = dynamic(() => import("@/components/Buttons/BackButton"), {
  ssr: false,
});

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartStore();
  const [showGoToCart, setShowGoToCart] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      try {
        if (typeof id !== "string") return;
        const res = await fetchProductById(id);
        setProduct(res.data);
      } catch (error) {
        showToast("error", "Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      showToast("success", `${product.title} added to cart`);
      setShowGoToCart(true);
    }
  };

  const handleGoToCart = () => {
    setShowGoToCart(false);
  };

  if (loading) return <SkeletonProduct />;
  if (!product) return <p>Product not found</p>;

  const {
    title,
    description,
    price,
    discountedPrice,
    image,
    rating,
    tags,
    reviews,
  } = product;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackButton />

      <div className="flex flex-col items-center text-center">
        {image?.url ? (
          <div className="relative w-full h-64 sm:h-72 md:h-80">
            <Image
              src={image.url}
              alt={image.alt || title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-700 rounded-lg">
            <span>No image available</span>
          </div>
        )}

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
          {title}
        </h2>
        <p className="text-yellow-500 text-sm mt-1">⭐ {rating}</p>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>

        <ProductPrice price={price} discountedPrice={discountedPrice} />
        <ProductTags tags={tags} />
        <ProductReviews reviews={reviews} />

        <button onClick={handleAddToCart} className="main-button mt-6">
          Add to Cart
        </button>
      </div>

      {showGoToCart && (
        <Link href="/cart">
          <button
            onClick={handleGoToCart}
            className="fixed bottom-6 right-6 bg-black text-white py-3 px-6 rounded-full shadow-lg cursor-pointer"
          >
            Go to Cart
          </button>
        </Link>
      )}
    </div>
  );
}
