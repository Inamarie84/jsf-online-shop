// /components/contact/InputField.tsx
import React from "react";

type InputFieldProps = {
  name: string;
  type: string;
  label: string;
  value: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export function InputField({
  name,
  type,
  label,
  value,
  error,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block font-medium">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          className="w-full p-2 border rounded"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
