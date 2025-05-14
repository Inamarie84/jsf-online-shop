"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/70 shadow-inner mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between md:items-start gap-6">
        <div className="flex flex-col space-y-1 text-sm text-center md:text-left text-[var(--color-secondary)]">
          <span>
            Email:{" "}
            <a
              href="mailto:info@marketa.com"
              className="hover:underline"
              style={{ color: "var(--color-secondary)" }}
            >
              info@marketa.com
            </a>
          </span>
          <span>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="hover:underline"
              style={{ color: "var(--color-secondary)" }}
            >
              +1 234 567 890
            </a>
          </span>
        </div>

        <nav className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0 text-sm font-semibold text-center">
          <Link href="/" className="nav-link font-normal">
            Home
          </Link>

          <Link href="/contact" className="nav-link font-normal">
            Contact
          </Link>
        </nav>

        <div className="flex space-x-4 justify-center md:justify-start text-[var(--color-secondary)]">
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

      <div className="text-center text-secondary text-xs py-2 border-t border-secondary/20">
        &copy; {new Date().getFullYear()} Markéta. All rights reserved.
      </div>
    </footer>
  );
};
