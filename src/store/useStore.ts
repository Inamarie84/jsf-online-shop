import { create } from "zustand";
import { TProduct } from "@/lib/types/products";

type Store = {
  products: TProduct[];
  loading: boolean;
  error: string | null;
  setProducts: (products: TProduct[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const useStore = create<Store>((set) => ({
  products: [],
  loading: false,
  error: null,
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
