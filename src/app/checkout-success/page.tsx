"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import confetti from "canvas-confetti";

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
    });
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
      <Link href="/" className="secondary-button">
        Back to Store
      </Link>
    </section>
  );
}
