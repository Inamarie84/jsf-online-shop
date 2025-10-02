type ProductPriceProps = {
  /** Base (original) price */
  price: number;
  /** Discounted price; when lower than `price`, discount UI is shown */
  discountedPrice: number;
};

/**
 * Displays pricing with discount state:
 * - Strikes through the original price
 * - Highlights current price
 * - Shows discount percentage and “You save …”
 */
export default function ProductPrice({
  price,
  discountedPrice,
}: ProductPriceProps) {
  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;
  const savingsAmount = hasDiscount
    ? (price - discountedPrice).toFixed(2)
    : null;

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        {hasDiscount && (
          <span className="line-through text-gray-500">${price}</span>
        )}
        <span
          className={`text-xl font-semibold ${
            hasDiscount ? "text-red-600" : "text-[var(--color-main-text)]"
          }`}
        >
          ${discountedPrice}
        </span>
        {hasDiscount && (
          <span className="text-xs text-red-500">-{discountPercentage}%</span>
        )}
      </div>
      {hasDiscount && (
        <p className="text-sm text-red-600 mt-1">You save ${savingsAmount}</p>
      )}
    </div>
  );
}
