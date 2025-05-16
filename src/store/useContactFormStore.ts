// /stores/useContactFormStore.ts
import { create } from "zustand";

type FormData = {
  fullName: string;
  subject: string;
  email: string;
  body: string;
};

type ContactFormState = {
  formData: FormData;
  errors: Partial<FormData>;
  successMessage: string;
  setFormData: (name: keyof FormData, value: string) => void;
  setError: (name: keyof FormData, error: string) => void;
  setSuccessMessage: (msg: string) => void;
  resetForm: () => void;
  setErrors: (errors: Partial<FormData>) => void;
};

export const useContactFormStore = create<ContactFormState>((set) => ({
  formData: { fullName: "", subject: "", email: "", body: "" },
  errors: {},
  successMessage: "",
  setFormData: (name, value) =>
    set((state) => ({
      formData: { ...state.formData, [name]: value },
    })),
  setError: (name, error) =>
    set((state) => ({
      errors: { ...state.errors, [name]: error },
    })),
  setSuccessMessage: (msg) => set({ successMessage: msg }),
  resetForm: () =>
    set({
      formData: { fullName: "", subject: "", email: "", body: "" },
      errors: {},
      successMessage: "",
    }),
  setErrors: (errors) => set({ errors }),
}));
