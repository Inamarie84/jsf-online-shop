import "@testing-library/jest-dom";
import { NextRouter } from "next/router";
import { TextEncoder, TextDecoder } from "util";

// Mock Next.js app router navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// Create a mock for Next.js router
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
  reload: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  beforePopState: jest.fn(),
  events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
  isFallback: false,
  isReady: true,
  isPreview: false,
};

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Set up globals
(globalThis as any).mockRouter = mockRouter;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
