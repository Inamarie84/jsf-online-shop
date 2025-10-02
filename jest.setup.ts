// jest.setup.ts
import "@testing-library/jest-dom";

// Mock Next.js app router/navigation hooks (App Router)
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

// Light-weight router mock you can attach to globals for tests that need it.
// (No NextRouter type import; keep this as `unknown` or make your own interface.)
const mockRouter = {
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
} as const;

// Attach to globalThis with a typed shape (no `any`)
(globalThis as unknown as { mockRouter: typeof mockRouter }).mockRouter =
  mockRouter;

// Polyfills (Node 18+ already has these; this keeps TS happy)
global.TextEncoder = global.TextEncoder;
global.TextDecoder = global.TextDecoder as typeof global.TextDecoder;

// Mock matchMedia for tests
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
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
