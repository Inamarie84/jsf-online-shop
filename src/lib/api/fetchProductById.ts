// src/lib/api/fetchProductById.ts

import { TSingleProductResponse } from "@/lib/types/api";
import { ONLINE_SHOP_API_URL } from "@/common/common";
import { fetcher } from "./fetcher";

export async function fetchProductById(
  id: string,
): Promise<TSingleProductResponse> {
  const url = `${ONLINE_SHOP_API_URL}/${id}`;
  return fetcher<TSingleProductResponse>(url);
}
