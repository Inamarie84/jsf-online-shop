import { fetcher } from "./fetcher";
import { ONLINE_SHOP_API_URL } from "@/common/common";
import { TOnlineShopResponse } from "@/lib/types/api";

export async function fetchProducts(): Promise<TOnlineShopResponse> {
  return fetcher<TOnlineShopResponse>(ONLINE_SHOP_API_URL);
}
