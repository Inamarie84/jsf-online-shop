export default function SkeletonProduct() {
  return (
    <div className="animate-pulse max-w-3xl mx-auto p-4">
      <div className="bg-gray-300 h-64 w-full rounded-lg" />
      <div className="h-8 bg-gray-300 rounded w-3/4 mt-4" />
      <div className="h-4 bg-gray-300 rounded w-1/2 mt-2" />
      <div className="h-4 bg-gray-300 rounded w-1/3 mt-2" />
      <div className="h-8 bg-gray-300 rounded w-1/2 mt-4" />
    </div>
  );
}
