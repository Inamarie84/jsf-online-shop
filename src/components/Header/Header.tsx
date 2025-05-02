"use client"; // only if you're using Next.js App Router — remove if using Pages Router

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use heroicons if you prefer

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      {" "}
      {/* White background for the header */}
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-4xl font-bold text-secondary">
          {" "}
          {/* Applied text-secondary for H1 color */}
          Markéta
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="font-semibold text-primary hover:text-gray-900"
          >
            {" "}
            {/* Applied navbar color for text */}
            Home
          </Link>
          <Link
            href="/cart"
            className="font-semibold text-primary hover:text-gray-900"
          >
            Cart
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-primary hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="font-semibold text-primary hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/cart"
              className="font-semibold text-primary hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-primary hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
