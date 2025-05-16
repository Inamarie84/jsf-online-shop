"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import CartIcon from "@/components/CartIcon/CartIcon";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Markéta logo"
            width={80}
            height={80}
          />
          <div className="hidden md:flex flex-col md:flex-row md:items-baseline md:space-x-2">
            <span
              className="font-serif-secondary text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight"
              style={{ textShadow: "0 1px 1px rgba(0,0,0,0.1)" }}
            >
              Markéta
            </span>
            <span className="font-serif-secondary text-xs md:text-sm font-light leading-tight">
              TheOnlineShop
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="nav-link font-semibold inline-flex items-center"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="nav-link font-semibold inline-flex items-center"
          >
            Contact
          </Link>
          <CartIcon />
        </nav>

        <div
          className="flex items-center space-x-4 md:hidden"
          aria-label="View cart"
        >
          <CartIcon />
          <button
            className="nav-link"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="nav-link font-semibold inline-flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="nav-link font-semibold inline-flex items-center"
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
