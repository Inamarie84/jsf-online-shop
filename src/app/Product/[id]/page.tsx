"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { showToast } from "@/lib/utils/showToast";
import { TProduct } from "@/lib/types/products";
import { fetchProductById } from "@/lib/api/fetchProductById";
import SkeletonProduct from "@/components/Product/SkeletonProduct";
import dynamic from "next/dynamic";
import ProductDetail from "@/components/Product/ProductDetail";

const BackButton = dynamic(() => import("@/components/Buttons/BackButton"), {
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
      } catch {
        showToast("error", "Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    showToast("success", `${product.title} added to cart`);
  };

  if (loading) return <SkeletonProduct />;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackButton />
      <ProductDetail product={product} onAddToCart={handleAddToCart} />
    </div>
  );
}
