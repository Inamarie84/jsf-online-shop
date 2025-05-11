"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};

    if (formData.fullName.trim().length < 3)
      newErrors.fullName = "Full name must be at least 3 characters.";
    if (formData.subject.trim().length < 3)
      newErrors.subject = "Subject must be at least 3 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email must be valid.";
    if (formData.body.trim().length < 3)
      newErrors.body = "Message must be at least 3 characters.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<typeof formData> = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the validation errors before submitting.");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");

    setFormData({
      fullName: "",
      subject: "",
      email: "",
      body: "",
    });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="max-w-xl mx-auto p-4 mt-8">
      <h1 className="text-3xl text-center mb-8">Contact Us</h1>
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
