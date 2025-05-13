import "@testing-library/jest-dom"; // Import to enable jest-dom matchers
import { NextRouter } from "next/router";

// Create a mock for Next.js router with missing properties and methods
const mockRouter: NextRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  query: {},
  pathname: "/",
  asPath: "/",
  prefetch: jest.fn(),
  route: "/",
  basePath: "",
  isLocaleDomain: false,
  // Additional methods to fully mock NextRouter
  reload: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  beforePopState: jest.fn(),
  events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() }, // Mock events
  isFallback: false,
  isReady: true,
  isPreview: false,
};

// Make it available globally for all tests
(globalThis as any).mockRouter = mockRouter;
