import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // This will include the setup file
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Support for absolute imports (using @)
    "^next/router$": "next-router-mock", // Mocking Next.js router
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Include all TypeScript files
  ],
};

export default config;
