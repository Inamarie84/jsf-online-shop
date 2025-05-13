"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart(); // Clear the cart when the component mounts
  }, [clearCart]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Thank you for your order!
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl">
        Your order was successful and your cart has been cleared. We appreciate
        your purchase!
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-white text-main-text border rounded hover:bg-gray-100 transition duration-300 ease-in-out text-sm"
      >
        Back to Store
      </Link>
    </section>
  );
}
