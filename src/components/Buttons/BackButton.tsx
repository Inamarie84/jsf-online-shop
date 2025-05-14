"use client";

export default function BackButton() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBack}
      className="mb-6 text-blue-500 hover:text-blue-700 cursor-pointer"
    >
      &larr; Back to Store
    </button>
  );
}
