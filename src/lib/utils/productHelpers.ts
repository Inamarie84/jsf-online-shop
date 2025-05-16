import { TProduct } from "@/lib/types/products";

export function filterAndSortProducts(
  products: TProduct[],
  searchQuery: string,
  sortOption: string,
): TProduct[] {
  return products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === "price-low-high") {
        return a.price - b.price;
      }
      if (sortOption === "price-high-low") {
        return b.price - a.price;
      }
      return 0;
    });
}
