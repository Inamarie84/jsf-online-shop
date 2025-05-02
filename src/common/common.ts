// 1. create component that fetches produts data and displays it
// 1.1. Create compnent
// 1.2. Fetch the API data from the server
// 1.3. Display the data in a list

// src/common/common.ts

// -----------------------------
// API URLs
// -----------------------------
export const BASE_API_URL = "https://v2.api.noroff.dev";
export const ONLINE_SHOP_API_URL = `${BASE_API_URL}/online-shop`;

// -----------------------------
// Button Labels
// -----------------------------
export const BUTTON_LABELS = {
  ADD_TO_CART: "Add to Cart",
  BUY_NOW: "Buy Now",
  CHECKOUT: "Checkout",
  CONTINUE_SHOPPING: "Continue Shopping",
};

// -----------------------------
// Form Validation Messages
// -----------------------------
export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required.",
  EMAIL_INVALID: "Please enter a valid email address.",
  PASSWORD_SHORT: "Password must be at least 6 characters.",
};

// -----------------------------
// Default / Fallback Values
// -----------------------------
export const FALLBACK_IMAGE_URL = "/images/fallback-product.png"; // You can add this image later
export const DEFAULT_PRODUCT_DESCRIPTION = "No description available.";

// -----------------------------
// Toast Notification Settings
// -----------------------------
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
