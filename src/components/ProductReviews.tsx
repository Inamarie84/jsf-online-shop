export default function ProductReviews({
  reviews,
}: {
  reviews?: {
    id: string;
    username: string;
    rating: number;
    description: string;
  }[];
}) {
  // Default to an empty array if reviews is undefined or null
  const safeReviews = reviews || [];

  if (safeReviews.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Reviews</h2>
      <ul className="space-y-4">
        {safeReviews.map((review) => (
          <li key={review.id} className="border rounded p-4">
            <p className="font-semibold">{review.username}</p>
            <p className="text-yellow-500 text-sm">⭐ {review.rating}</p>
            <p className="text-gray-700 mt-1">{review.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
