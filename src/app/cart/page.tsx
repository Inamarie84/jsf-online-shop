"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { showToast } from "@/lib/utils/showToast";
import CartItem from "@/components/Cart/CartItem";

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const router = useRouter();

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    showToast("success", "Item removed from cart");
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemove(productId);
    } else {
      updateQuantity(productId, quantity);
      showToast("success", `Quantity updated`);
    }
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => {
      const price = item.product.discountedPrice || item.product.price;
      return total + price * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    clearCart();
    showToast("success", "Checkout successful!");
    router.push("/checkOutSuccess");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 text-sm sm:text-base">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}

          <div className="mt-6 flex flex-col items-center sm:flex-row sm:justify-between gap-4 text-center sm:text-left">
            <span className="text-lg sm:text-xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </span>
            <button
              className="main-button text-sm px-6 py-2"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <Link href="/" className="secondary-button">
          Back to Store
        </Link>
      </div>
    </div>
  );
}
