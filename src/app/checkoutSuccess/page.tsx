"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    // Clear the cart when the component mounts
    clearCart();
  }, [clearCart]);

  return (
    <section className="flex flecx-col items-center justify-center min-h-[60vh] text-center p-4">
      <h1 className="mb-4">Thank you for your order!</h1>
      <p className="text-lg mb-6">
        Your order was successful and your cart has been cleared.
      </p>
      <Link href="/" className="main-button">
        Back to store
      </Link>
    </section>
  );
}
