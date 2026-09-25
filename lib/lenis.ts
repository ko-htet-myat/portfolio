import type Lenis from "lenis";

// Shared handle to the page-level Lenis instance created in SmoothScrolling,
// so any component (e.g. ScrollToTop) can drive smooth scrolling.
let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenisInstance(): Lenis | null {
  return instance;
}
