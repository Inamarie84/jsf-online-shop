// src/components/ProductCard/ProductFilterBar.tsx
"use client";

import { ChangeEvent } from "react";

type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortOption: string;
  onSortChange: (value: string) => void;
};

export function ProductFilterBar({
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onSearchChange(e.target.value)
        }
        className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <select
        value={sortOption}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onSortChange(e.target.value)
        }
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="default">Sort by</option>
        <option value="name">Name (A-Z)</option>
        <option value="price-low-high">Price (Low to High)</option>
        <option value="price-high-low">Price (High to Low)</option>
      </select>
    </div>
  );
}
