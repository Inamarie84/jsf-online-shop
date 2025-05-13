import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TProduct } from "@/lib/types/products";

export type CartItem = {
  product: TProduct;
  quantity: number;
};

export type CartState = {
  cartItems: CartItem[];
  addToCart: (product: TProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existing = state.cartItems.find(
            (item) => item.product.id === product.id,
          );
          if (existing) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }
          return {
            cartItems: [...state.cartItems, { product, quantity }],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.product.id !== productId,
          ),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          ),
        })),

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", // this is the key in localStorage
    },
  ),
);
