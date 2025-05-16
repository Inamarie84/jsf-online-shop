import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "./page";
import { useCartStore } from "@/store/cartStore";
import { showToast } from "@/lib/utils/showToast";

// Mock useRouter from next/navigation
const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

// Mock toast to avoid side effects
jest.mock("@/lib/utils/showToast", () => ({
  showToast: jest.fn(),
}));

// Mock Zustand store
jest.mock("@/store/cartStore", () => ({
  useCartStore: jest.fn(),
}));

const mockedUseCartStore = useCartStore as unknown as jest.Mock;

describe("CartPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows empty cart message when cart is empty", () => {
    mockedUseCartStore.mockImplementation((selector) =>
      selector({
        cartItems: [],
        removeFromCart: jest.fn(),
        updateQuantity: jest.fn(),
        clearCart: jest.fn(),
      }),
    );

    render(<CartPage />);
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("renders cart items when present", () => {
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

    mockedUseCartStore.mockImplementation((selector) =>
      selector({
        cartItems: mockItems,
        removeFromCart: jest.fn(),
        updateQuantity: jest.fn(),
        clearCart: jest.fn(),
      }),
    );

    render(<CartPage />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(
      screen.getByText((text) => text.includes("$180.00")),
    ).toBeInTheDocument();
  });

  it("removes item from cart when remove is clicked", () => {
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

    mockedUseCartStore.mockImplementation((selector) =>
      selector({
        cartItems: mockItems,
        removeFromCart: removeFromCartMock,
        updateQuantity: jest.fn(),
        clearCart: jest.fn(),
      }),
    );

    render(<CartPage />);
    fireEvent.click(screen.getByText("Remove"));
    expect(removeFromCartMock).toHaveBeenCalledWith("1");
  });

  it("clears cart and navigates on checkout", () => {
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

    mockedUseCartStore.mockImplementation((selector) =>
      selector({
        cartItems: mockItems,
        removeFromCart: jest.fn(),
        updateQuantity: jest.fn(),
        clearCart: clearCartMock,
      }),
    );

    render(<CartPage />);
    fireEvent.click(screen.getByText("Checkout"));
    expect(clearCartMock).toHaveBeenCalled();
    expect(pushMock).toHaveBeenCalledWith("/checkOutSuccess");
  });
});
