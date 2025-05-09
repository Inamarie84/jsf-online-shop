"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";
import { TProduct } from "@/lib/types/products";
import { fetchProductById } from "@/lib/api/fetchProductById";
import Image from "next/image";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering
import Link from "next/link"; // Import Link component from Next.js

import SkeletonProduct from "@/components/Product/SkeletonProduct";
import ProductPrice from "@/components/Product/ProductPrice";
import ProductTags from "@/components/Product/ProductTags";
import ProductReviews from "@/components/Product/ProductReviews";
import { FALLBACK_IMAGE_URL } from "@/common/common";

// Dynamically import useRouter to ensure client-side rendering
const BackButton = dynamic(() => import("@/components/Product/BackButton"), {
  ssr: false,
});

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartStore();
  const [showGoToCart, setShowGoToCart] = useState(false); // Track if an item is added

  useEffect(() => {
    async function loadProduct() {
      try {
        if (typeof id !== "string") return;
        const res = await fetchProductById(id);
        setProduct(res.data);
      } catch (error: any) {
        toast.error("Failed to load product. Please try again later.");
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.title} added to cart`);
      setShowGoToCart(true); // Show the "Go to Cart" button
    }
  };

  const handleGoToCart = () => {
    // Optionally handle any additional logic here before redirecting to the cart
    setShowGoToCart(false); // Hide the button when navigating to the cart
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
      {/* Back Button Component */}
      <BackButton />

      {image?.url ? (
        <div className="relative w-full h-64">
          <Image
            src={image?.url || FALLBACK_IMAGE_URL}
            alt={image?.alt || title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-700 rounded-lg">
          <span>No image available</span>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-yellow-500 text-sm">⭐ {rating}</p>
      <p className="text-gray-600 mt-2">{description}</p>

      <ProductPrice price={price} discountedPrice={discountedPrice} />
      <ProductTags tags={tags} />
      <ProductReviews reviews={reviews} />

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-black text-white rounded-lg py-2 px-4 text-sm text-center hover:bg-opacity-80"
      >
        Add to Cart
      </button>

      {/* Floating "Go to Cart" button */}
      {showGoToCart && (
        <Link href="/cart">
          <button
            onClick={handleGoToCart}
            className="fixed bottom-6 right-6 bg-black text-white py-3 px-6 rounded-full shadow-lg"
          >
            Go to Cart
          </button>
        </Link>
      )}
    </div>
  );
}
