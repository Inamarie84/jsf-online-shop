"use client";

import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ProductPrice from "@/components/Product/ProductPrice";
import Link from "next/link"; // Import Link component from Next.js

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const router = useRouter();

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    toast.success("Item removed from cart");
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemove(productId);
    } else {
      updateQuantity(productId, quantity);
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
    router.push("/checkout-success");
    toast.success("Checkout successful!");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center border-b py-4"
            >
              <img
                src={item.product.image?.url || "/fallback-image.jpg"}
                alt={item.product.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4 flex-grow">
                <h2 className="font-semibold">{item.product.title}</h2>
                <ProductPrice
                  price={item.product.price}
                  discountedPrice={item.product.discountedPrice}
                />
              </div>

              <div className="flex items-center">
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
                  className="w-12 text-center mx-2"
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
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <span className="text-xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </span>
            <button
              onClick={handleCheckout}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Back to shopping button */}
      <div className="mt-6">
        <Link
          href="/"
          className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Back to Shopping
        </Link>
      </div>
    </div>
  );
}
