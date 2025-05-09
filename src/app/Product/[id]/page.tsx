"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";
import { TProduct } from "@/lib/types/products";
import { fetchProductById } from "@/lib/api/fetchProductById";
import Image from "next/image";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering

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
    }
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

      <h1 className="text-2xl font-bold mt-4">{title}</h1>
      <p className="text-yellow-500 text-sm">⭐ {rating}</p>
      <p className="text-gray-600 mt-2">{description}</p>

      <ProductPrice price={price} discountedPrice={discountedPrice} />
      <ProductTags tags={tags} />
      <ProductReviews reviews={reviews} />

      <button
        onClick={handleAddToCart}
        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
