// src/types/global.d.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
export {};

declare global {
  // add whatever you put in globals during tests
  // example: a mock next/router compatible object
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Global {
    mockRouter: unknown;
  }

  // If you need to attach to globalThis directly:
  // declare const mockRouter: unknown; // or a more specific type
}
