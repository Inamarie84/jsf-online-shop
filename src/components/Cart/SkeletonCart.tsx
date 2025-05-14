export default function SkeletonCart() {
  return (
    <div className="animate-pulse max-w-3xl mx-auto p-4">
      <div className="flex items-center border-b py-4">
        <div className="bg-gray-300 w-24 h-24 rounded" />
        <div className="ml-4 flex-grow">
          <div className="bg-gray-300 h-6 w-3/4 rounded" />
          <div className="bg-gray-300 h-4 w-1/2 rounded mt-2" />
        </div>
        <div className="flex items-center">
          <div className="bg-gray-300 w-8 h-8 rounded mx-2" />
          <div className="bg-gray-300 w-12 h-8 rounded mx-2" />
          <div className="bg-gray-300 w-8 h-8 rounded mx-2" />
        </div>
      </div>

      <div className="flex items-center border-b py-4 mt-4">
        <div className="bg-gray-300 w-24 h-24 rounded" />
        <div className="ml-4 flex-grow">
          <div className="bg-gray-300 h-6 w-3/4 rounded" />
          <div className="bg-gray-300 h-4 w-1/2 rounded mt-2" />
        </div>
        <div className="flex items-center">
          <div className="bg-gray-300 w-8 h-8 rounded mx-2" />
          <div className="bg-gray-300 w-12 h-8 rounded mx-2" />
          <div className="bg-gray-300 w-8 h-8 rounded mx-2" />
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="bg-gray-300 w-1/4 h-8 rounded" />
        <div className="bg-gray-300 w-32 h-8 rounded" />
      </div>

      <div className="mt-6">
        <div className="bg-gray-300 w-32 h-8 rounded" />
      </div>
    </div>
  );
}
