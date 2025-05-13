// src/types/canvas-confetti.d.ts

declare module "canvas-confetti" {
  interface ConfettiOptions {
    particleCount?: number;
    spread?: number;
    origin?: { x: number; y: number };
  }

  const confetti: (options?: ConfettiOptions) => void;
  export default confetti;
}
