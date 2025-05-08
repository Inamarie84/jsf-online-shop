export default function ProductTags({ tags }: { tags?: string[] }) {
  // Default to an empty array if tags is undefined or null
  const safeTags = tags || [];

  if (safeTags.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {safeTags.map((tag) => (
        <span key={tag} className="bg-gray-200 text-sm px-2 py-1 rounded-full">
          #{tag}
        </span>
      ))}
    </div>
  );
}
