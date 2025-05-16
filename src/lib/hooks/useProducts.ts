import { useEffect, useState } from "react";
import { TProduct } from "@/lib/types/products";
import { fetchProducts } from "@/lib/api/fetchProducts";
import { showToast } from "@/lib/utils/showToast";
import { filterAndSortProducts } from "@/lib/utils/productHelpers";

export function useProducts(searchQuery: string, sortOption: string) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data.data);
      } catch {
        showToast("error", "Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = filterAndSortProducts(
    products,
    searchQuery,
    sortOption,
  );

  return { products: filteredProducts, loading };
}
