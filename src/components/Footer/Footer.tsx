"use client"; // if using App Router — remove if using Pages Router

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react"; // social icons

export const Footer = () => {
  return (
    <footer className="bg-white/70 shadow-inner mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between md:items-start gap-6">
        {/* Contact info */}
        <div className="flex flex-col space-y-1 text-sm text-center md:text-left">
          <span>
            Email:{" "}
            <a href="mailto:info@marketa.com" className="hover:underline">
              info@marketa.com
            </a>
          </span>
          <span>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +1 234 567 890
            </a>
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0 text-sm font-semibold text-center md:text-left">
          <Link href="/" className="transition-colors">
            Home
          </Link>
          <Link href="/cart" className="transition-colors">
            Cart
          </Link>
          <Link href="/contact" className="transition-colors">
            Contact
          </Link>
        </nav>

        {/* Social media */}
        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="transition-colors" size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="transition-colors" size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="transition-colors" size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs py-2 border-t border-secondary/20">
        &copy; {new Date().getFullYear()} Markéta. All rights reserved.
      </div>
    </footer>
  );
};
