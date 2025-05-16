"use client";

import React from "react";
import { ContactForm } from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto p-4 mt-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8">
        Contact Us
      </h1>
      <ContactForm />
    </section>
  );
}
