"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartIcon() {
  const cartItems = useCartStore((state) => state.cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/cart"
      aria-label="View cart"
      className="relative inline-flex items-center justify-center"
    >
      <ShoppingCart size={24} />
      <span className="sr-only">View cart</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
