// src/components/Cart/CartItem.tsx
import { TProduct } from "@/lib/types/products";
import { ImageWithFallback } from "@/common/ImageWithFallback";
import ProductPrice from "@/components/Product/ProductPrice";

type Props = {
  product: TProduct;
  quantity: number;
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
};

export default function CartItem({
  product,
  quantity,
  onQuantityChange,
  onRemove,
}: Props) {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between border-b pb-4 gap-4 text-center sm:text-left">
      <div className="relative w-32 h-32 flex-shrink-0 rounded overflow-hidden">
        <ImageWithFallback
          src={product.image?.url}
          alt={product.image?.alt}
          title={product.title}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center sm:items-start gap-2 flex-grow">
        <h2 className="font-semibold">{product.title}</h2>
        <ProductPrice
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
      </div>

      <div className="flex items-center justify-center gap-2 w-32">
        <button
          onClick={() => onQuantityChange(product.id, quantity - 1)}
          className="px-2 py-1 border rounded"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => onQuantityChange(product.id, +e.target.value)}
          className="w-12 text-center border rounded"
          min="0"
        />
        <button
          onClick={() => onQuantityChange(product.id, quantity + 1)}
          className="px-2 py-1 border rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onRemove(product.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
}
