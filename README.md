# Markéta — The Online Shop (Next.js + TypeScript)

![homepage](/public/images/javascript-frameworks-hero.webp)

**Live demo:** https://jsf-online-shop.vercel.app/  
**Repository:** https://github.com/Inamarie84/jsf-online-shop

---

## Overview

This project is a fully functional e-commerce store built with **Next.js**, **React**, **TypeScript**, **Zustand**, and **Tailwind CSS**. It provides an intuitive user experience with product browsing, cart management, and a successful checkout process. The store utilizes a custom-built API to fetch product data and integrate a responsive UI for seamless interaction across devices.

---

## Key Features

- **Homepage**: Displays a list of all products with a search bar to filter products by name.
- **Product Page**: Shows detailed information about a selected product, including title, description, price, and reviews.
- **Cart Page**: Displays a list of products in the user's cart and calculates the total cost.
- **Checkout Success Page**: A confirmation page that shows when the order is successfully placed and clears the cart.
- **Contact Page**: A contact form with validation to collect user inquiries.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Tech Stack

- **Next.js 14+**, **React 18+**
- **TypeScript** (strict)
- **Zustand** for cart state
- **Tailwind CSS** for styling
- **Jest + React Testing Library** (setup present; tests can be added later)

---

## API

Data is fetched from the **Noroff Online Shop API** (list products + product by id).

---

## Recent Improvements (Portfolio 2)

- Added JSDoc comments to core product components for clarity and developer experience.
- Replaced array-index React keys in the loading grid with stable keys to avoid reconciliation glitches.
- Type hygiene: removed unused Jest types from `tsconfig.json`, fixed a typo in `api.ts`, and added a global type declaration file.

---

## Getting Started

### Prerequisites

- Node **18+**
- npm **9+**

### Installation

Clone the repo (HTTPS) and install dependencies:

```bash
git clone https://github.com/Inamarie84/jsf-online-shop.git
cd jsf-online-shop
npm install

```

### Development

Start the dev server (opens at http://localhost:3000):

```bash
npm run dev

```

### Production

```bash
npm run build
npm start

```

---

## Pages

- `/` - Homepage (catalog + search)
- `/product/[id]` - Individual product page
- `/cart` - Cart page
- `/checkout-success` - Checkout success page
- `/contact` - Contact page

---

## Accessibility & Performance

- Semantic headings/labels
- Intrinsic image sizing & responsive layout
- Stable keys in lists (prevents UI glitches)
- Visible focus states on interactive controls

## State Management

The application uses **Zustand** to manage global state, including:

- The list of products fetched from the API.
- The user's cart, which holds the products added to the cart.

## Deployment

The project has been deployed to **Vercel**. You can access the live version of the store at the following URL:

[Marketa - TheOnlineShop](https://jsf-online-shop.vercel.app/)

## Conclusion

This project demonstrates the integration of several modern web technologies to build a responsive and interactive e-commerce store. It features robust state management with **Zustand**, dynamic data fetching using the **Noroff API**, and responsive design with **Tailwind CSS**.

---

## Contact

[My LinkedIn page](https://www.linkedin.com/in/ina-marie-forseth-66a7b232/)

```

```
