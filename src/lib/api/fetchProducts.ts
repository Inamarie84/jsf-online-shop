// src/lib/api/fetchProducts.ts
import { TOnlineShopResponse } from "@/lib/types/api";
import { ONLINE_SHOP_API_URL } from "@/common/common";

export async function fetchProducts(): Promise<TOnlineShopResponse> {
  const res = await fetch(ONLINE_SHOP_API_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }
  return res.json();
}
