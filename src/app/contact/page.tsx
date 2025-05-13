"use client";

import { useState } from "react";
import { showToast } from "@/lib/utils/showToast"; // Import the showToast helper
import { EMAIL_REGEX, VALIDATION_MESSAGES } from "@/common/common"; // Adjust path if needed

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "fullName":
      case "subject":
      case "body":
        if (value.trim().length < 3) {
          return `${name[0].toUpperCase() + name.slice(1)} must be at least 3 characters.`;
        }
        break;
      case "email":
        if (!EMAIL_REGEX.test(value)) {
          return VALIDATION_MESSAGES.EMAIL_INVALID;
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof typeof formData] = error;
    });

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("error", "Please fix the validation errors before submitting.");
      return;
    }

    console.log("Form submitted:", formData);
    showToast("success", "Message sent successfully!");

    setFormData({
      fullName: "",
      subject: "",
      email: "",
      body: "",
    });
    setErrors({});
  };

  return (
    <section className="max-w-xl mx-auto p-4 mt-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "fullName", type: "text", label: "Full Name" },
          { name: "subject", type: "text", label: "Subject" },
          { name: "email", type: "email", label: "Email" },
        ].map(({ name, type, label }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors[name as keyof typeof formData] && (
              <p className="text-red-500 text-sm">
                {errors[name as keyof typeof formData]}
              </p>
            )}
          </div>
        ))}

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 border rounded"
          />
          {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
        </div>

        <button type="submit" className="main-btn w-full">
          Send Message
        </button>
      </form>
    </section>
  );
}
