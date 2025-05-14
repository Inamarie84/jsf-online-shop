"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import ProductPrice from "@/components/Product/ProductPrice";
import Link from "next/link";
import { showToast } from "@/lib/utils/showToast";
import Image from "next/image";

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
            <div
              key={item.product.id}
              className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between border-b pb-4 gap-4 text-center sm:text-left"
            >
              {item.product.image?.url ? (
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={item.product.image.url}
                    alt={item.product.image.alt || item.product.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 bg-gray-300 flex items-center justify-center text-gray-700 rounded">
                  <span className="text-xs text-center">No image</span>
                </div>
              )}

              <div className="flex flex-col items-center sm:items-start gap-2 flex-grow">
                <h2 className="font-semibold">{item.product.title}</h2>
                <ProductPrice
                  price={item.product.price}
                  discountedPrice={item.product.discountedPrice}
                />
              </div>

              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() =>
                    handleQuantityChange(item.product.id, item.quantity - 1)
                  }
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.product.id, +e.target.value)
                  }
                  className="w-12 text-center border rounded"
                  min="0"
                />
                <button
                  onClick={() =>
                    handleQuantityChange(item.product.id, item.quantity + 1)
                  }
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemove(item.product.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
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
        <Link href="/" className="secondary-button ">
          Back to Store
        </Link>
      </div>
    </div>
  );
}
