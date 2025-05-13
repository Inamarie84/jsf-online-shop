// src/common/common.ts

// -----------------------------
// API URLs
// -----------------------------
export const BASE_API_URL = "https://v2.api.noroff.dev";
export const ONLINE_SHOP_API_URL = `${BASE_API_URL}/online-shop`;

// -----------------------------
// Form Validation Messages
// -----------------------------
export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required.",
  EMAIL_INVALID: "Please enter a valid email address.",
};

// -----------------------------
// Toast Notification Settings
// -----------------------------

export type ToastType = "success" | "error" | "loading";

export const TOAST_SETTINGS = {
  duration: 3000,
  position: "top-center" as "top-center" | "bottom-right",
};

// -----------------------------
// Regex Patterns
// -----------------------------
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// -----------------------------
// Other Reusable Constants
// -----------------------------
export const ITEMS_PER_PAGE = 12;
