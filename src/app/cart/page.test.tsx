import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "./page";
import { useCartStore } from "@/store/cartStore";

jest.mock("@/store/cartStore", () => ({
  useCartStore: jest.fn(),
}));

const mockedUseCartStore = useCartStore as unknown as jest.Mock;

describe("CartPage", () => {
  it("should show empty cart message if there are no items", () => {
    mockedUseCartStore.mockReturnValue({
      cartItems: [],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<CartPage />);
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("should render cart items when present", () => {
    const mockItems = [
      {
        product: {
          id: "1",
          title: "Product 1",
          price: 100,
          discountedPrice: 80,
          image: { url: "/test.jpg", alt: "Product 1" },
        },
        quantity: 1,
      },
      {
        product: {
          id: "2",
          title: "Product 2",
          price: 50,
          discountedPrice: 50,
          image: { url: "/test.jpg", alt: "Product 2" },
        },
        quantity: 2,
      },
    ];

    mockedUseCartStore.mockReturnValue({
      cartItems: mockItems,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<CartPage />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("$80")).toBeInTheDocument();
  });

  it("should calculate total cost correctly", () => {
    const mockItems = [
      {
        product: {
          id: "1",
          title: "Product 1",
          price: 100,
          discountedPrice: 80,
          image: { url: "/test.jpg", alt: "Product 1" },
        },
        quantity: 1,
      },
      {
        product: {
          id: "2",
          title: "Product 2",
          price: 50,
          discountedPrice: 50,
          image: { url: "/test.jpg", alt: "Product 2" },
        },
        quantity: 2,
      },
    ];

    mockedUseCartStore.mockReturnValue({
      cartItems: mockItems,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<CartPage />);
    expect(screen.getByText("$180.00")).toBeInTheDocument();
  });

  it("should call removeFromCart when remove button is clicked", () => {
    const removeFromCartMock = jest.fn();

    const mockItems = [
      {
        product: {
          id: "1",
          title: "Product 1",
          price: 100,
          discountedPrice: 80,
          image: { url: "/test.jpg", alt: "Product 1" },
        },
        quantity: 1,
      },
    ];

    mockedUseCartStore.mockReturnValue({
      cartItems: mockItems,
      addToCart: jest.fn(),
      removeFromCart: removeFromCartMock,
      updateQuantity: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<CartPage />);

    fireEvent.click(screen.getByText("Remove"));
    expect(removeFromCartMock).toHaveBeenCalledWith("1");
  });

  it("should call clearCart when checkout button is clicked", () => {
    const clearCartMock = jest.fn();

    const mockItems = [
      {
        product: {
          id: "1",
          title: "Product 1",
          price: 100,
          discountedPrice: 80,
          image: { url: "/test.jpg", alt: "Product 1" },
        },
        quantity: 1,
      },
    ];

    mockedUseCartStore.mockReturnValue({
      cartItems: mockItems,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      clearCart: clearCartMock,
    });

    render(<CartPage />);

    fireEvent.click(screen.getByText("Checkout"));
    expect(clearCartMock).toHaveBeenCalled();
  });
});
