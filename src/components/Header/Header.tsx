"use client"; // only if you're using Next.js App Router — remove if using Pages Router

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use heroicons if you prefer
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      {" "}
      {/* White background for the header */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo + title block */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Markéta logo"
            width={60}
            height={60}
          />
          <div className="flex flex-col md:flex-row md:items-baseline md:space-x-2">
            <span className="text-2xl md:text-3xl font-bold text-secondary leading-none align-middle">
              Markéta
            </span>
            <span className="text-sm md:text-base font-light text-secondary leading-none align-middle">
              TheOnlineShop
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="font-semibold text-primary hover:text-primary-hover-color transition-color"
          >
            Home
          </Link>
          <Link
            href="/cart"
            className="font-semibold text-primary hover:text-primary-hover-color transition-color"
          >
            Cart
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-primary hover:text-primary-hover-color transition-color"
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
              className="font-semibold text-primary hover:text-primary-hover-color transition-color"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/cart"
              className="font-semibold text-primary hover:text-primary-hover-color transition-color"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-primary hover:text-primary-hover-color transition-color"
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
