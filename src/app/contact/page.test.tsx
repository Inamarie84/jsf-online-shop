import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactPage from "./page";

describe("ContactPage", () => {
  it("shows errors for empty required fields", async () => {
    render(<ContactPage />);
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(
        screen.getByText("Full Name must be at least 3 characters."),
      ).toBeInTheDocument();
      expect(
        screen.getByText("Subject must be at least 3 characters."),
      ).toBeInTheDocument();
      expect(screen.getByText("Enter a valid email.")).toBeInTheDocument();
      expect(
        screen.getByText("Message must be at least 3 characters."),
      ).toBeInTheDocument();
    });
  });

  it("shows error for invalid email format", async () => {
    render(<ContactPage />);
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "invalidemail" },
    });
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(screen.getByText("Enter a valid email.")).toBeInTheDocument();
    });
  });

  it("submits the form successfully if all fields are valid", async () => {
    render(<ContactPage />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "Inquiry" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "Hello, I need more information." },
    });
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(
        screen.getByText("Thank you for your message!"),
      ).toBeInTheDocument();
    });
  });
});
