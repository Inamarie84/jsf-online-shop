// /components/contact/ContactForm.tsx
"use client";

import React from "react";
import { InputField } from "./InputField";
import { showToast } from "@/lib/utils/showToast";
import { EMAIL_REGEX, VALIDATION_MESSAGES } from "@/common/common";
import { useContactFormStore } from "@/store/useContactFormStore";

const fields = [
  { name: "fullName", type: "text", label: "Full Name", minLength: 3 },
  { name: "subject", type: "text", label: "Subject", minLength: 3 },
  { name: "email", type: "email", label: "Email" },
];

const validateField = (name: string, value: string): string => {
  if (["fullName", "subject", "body"].includes(name)) {
    if (value.trim().length < 3) {
      return `${
        name === "body"
          ? "Message"
          : name === "fullName"
            ? "Full Name"
            : "Subject"
      } must be at least 3 characters.`;
    }
  }
  if (name === "email" && !EMAIL_REGEX.test(value)) {
    return VALIDATION_MESSAGES.EMAIL_INVALID;
  }
  return "";
};

export function ContactForm() {
  const {
    formData,
    errors,
    successMessage,
    setFormData,
    setError,
    setSuccessMessage,
    resetForm,
    setErrors,
  } = useContactFormStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(name as keyof typeof formData, value);
    setError(name as keyof typeof formData, validateField(name, value));
    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value as string); // <-- cast here
      if (error) {
        newErrors[key as keyof typeof formData] = error;
      }
    });
    return newErrors;
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
    showToast("success", "Thank you for your message!");
    resetForm();
    setSuccessMessage("Thank you for your message!");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map(({ name, type, label }) => (
          <InputField
            key={name}
            name={name}
            type={type}
            label={label}
            value={formData[name as keyof typeof formData]}
            error={errors[name as keyof typeof formData]}
            onChange={handleChange}
          />
        ))}

        <InputField
          name="body"
          type="textarea"
          label="Message"
          value={formData.body}
          error={errors.body}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="main-button mt-4 text-sm text-center mx-auto block"
        >
          Send Message
        </button>
      </form>

      {successMessage && (
        <div
          role="alert"
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mt-6 text-center"
        >
          {successMessage}
        </div>
      )}
    </>
  );
}
