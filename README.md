# E-Commerce Store

## Overview

This project is a fully functional e-commerce store built with **Next.js**, **React**, **TypeScript**, **Zustand**, and **Tailwind CSS**. It provides an intuitive user experience with product browsing, cart management, and a successful checkout process. The store utilizes a custom-built API to fetch product data and integrate a responsive UI for seamless interaction across devices.

## Key Features

- **Homepage**: Displays a list of all products with a search bar to filter products by name.
- **Product Page**: Shows detailed information about a selected product, including title, description, price, and reviews.
- **Cart Page**: Displays a list of products in the user's cart and calculates the total cost.
- **Checkout Success Page**: A confirmation page that shows when the order is successfully placed and clears the cart.
- **Contact Page**: A contact form with validation to collect user inquiries.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Next.js**: A React framework for building server-rendered and statically generated web applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Zustand**: A state management library used to manage global application state (e.g., cart state).
- **Tailwind CSS**: A utility-first CSS framework used to build custom and responsive designs.

## API

This e-commerce store fetches product data from the **Noroff API**. You can retrieve individual products by appending their unique product ID to the API URL.

## Pages

### 1. Homepage

The homepage lists all available products and features a search bar that filters products by name. Each product is displayed as a card with a **View Product** button, leading to the individual product page.

### 2. Product Page

The individual product page displays:

- Product title, description, and image.
- Price and any available discounts.
- User reviews (if available).
- An **Add to Cart** button to add the product to the shopping cart.

### 3. Cart Page

The cart page displays the products added to the cart and calculates the total price. It includes a **Checkout** button that navigates to the checkout page.

### 4. Checkout Success Page

This page displays a success message when an order is successfully placed. It also provides a link to go back to the store and clears the cart.

### 5. Contact Page

The contact page features a form with the following fields:

- Full Name (required, minimum 3 characters)
- Subject (required, minimum 3 characters)
- Email (required, valid email format)
- Body (required, minimum 3 characters)

### Layout

All pages are wrapped in a `Layout` component, which includes a header (with a cart icon showing the number of items in the cart) and a footer.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Inamarie84/jsf-online-shop.git

   ```

2. Navigate to the project directory:

```bash
cd jsf-online-shop

```

3. Install dependencies:

```bash
npm install

```

4. Run the development server:

```bash
npm run dev

```

5. Open your browser and visit http://localhost:3000 to view the store.

## Features Breakdown

### Home Page

- A list of all products fetched from the Noroff API.
- A dynamic search bar that filters the product list as the user types.
- Each product card links to the individual product page.

### Product Page

- Displays detailed product information (title, description, price, reviews).
- An **Add to Cart** button allows users to add items to the cart.

### Cart Page

- Displays all items added to the cart with their details (name, quantity, price).
- Calculates and displays the total cost of items in the cart.
- A **Checkout** button leads to the checkout success page.

### Checkout Success Page

- Displays a success message once the user completes the checkout process.
- Provides a link to return to the homepage.

### Contact Page

- Includes a contact form with validations for Full Name, Subject, Email, and Body.
- Submitting the form logs the form data to the console.

## State Management

The application uses **Zustand** to manage global state, including:

- The list of products fetched from the API.
- The user's cart, which holds the products added to the cart.

## Deployment

The project has been deployed to **Vercel**. You can access the live version of the store at the following URL:

[Your Live Store](https://jsf-online-shop.vercel.app/)

## Conclusion

This project demonstrates the integration of several modern web technologies to build a responsive and interactive e-commerce store. It features robust state management with **Zustand**, dynamic data fetching using the **Noroff API**, and responsive design with **Tailwind CSS**.

```

```
