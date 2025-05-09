"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartIcon() {
  const cartItems = useCartStore((state) => state.cartItems); // Use cartItems instead of items
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/cart" className="relative inline-flex items-center space-x-1">
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
