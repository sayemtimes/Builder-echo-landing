// Performance monitoring utilities
export const performanceLogger = {
  markStart: (name: string) => {
    if (typeof window !== "undefined" && window.performance) {
      performance.mark(`${name}-start`);
    }
  },

  markEnd: (name: string) => {
    if (typeof window !== "undefined" && window.performance) {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);

      const measure = performance.getEntriesByName(name)[0];
      if (measure) {
        console.log(`${name}: ${measure.duration.toFixed(2)}ms`);
      }
    }
  },

  measurePageLoad: () => {
    if (typeof window !== "undefined" && window.performance) {
      const navigation = performance.getEntriesByType("navigation")[0] as any;
      if (navigation) {
        console.log("Page Load Metrics:", {
          "DOM Content Loaded": `${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`,
          "Load Complete": `${navigation.loadEventEnd - navigation.loadEventStart}ms`,
          "First Paint":
            performance.getEntriesByName("first-paint")[0]?.startTime || "N/A",
          "First Contentful Paint":
            performance.getEntriesByName("first-contentful-paint")[0]
              ?.startTime || "N/A",
        });
      }
    }
  },
};

// Image lazy loading utility
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit,
) => {
  if (typeof window === "undefined" || !window.IntersectionObserver) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  });
};

// Debounce utility for scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for resize events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string) => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Optimize animations based on device capabilities
export const getOptimizedAnimationConfig = () => {
  if (typeof window === "undefined") {
    return { duration: 0.3, ease: "easeOut" };
  }

  const isLowEnd =
    navigator.hardwareConcurrency <= 2 ||
    navigator.deviceMemory <= 2 ||
    window.screen.width <= 768;

  const reducedMotion = prefersReducedMotion();

  if (reducedMotion) {
    return { duration: 0.01, ease: "linear" };
  }

  if (isLowEnd) {
    return { duration: 0.2, ease: "easeOut" };
  }

  return { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] };
};

// Virtual scrolling utility
export class VirtualScroller {
  private container: HTMLElement;
  private itemHeight: number;
  private buffer: number;
  private scrollTop: number = 0;

  constructor(container: HTMLElement, itemHeight: number, buffer: number = 5) {
    this.container = container;
    this.itemHeight = itemHeight;
    this.buffer = buffer;
  }

  getVisibleRange(totalItems: number): { start: number; end: number } {
    const containerHeight = this.container.clientHeight;
    const visibleItemsCount = Math.ceil(containerHeight / this.itemHeight);

    const startIndex = Math.max(
      0,
      Math.floor(this.scrollTop / this.itemHeight) - this.buffer,
    );
    const endIndex = Math.min(
      totalItems - 1,
      startIndex + visibleItemsCount + this.buffer * 2,
    );

    return { start: startIndex, end: endIndex };
  }

  updateScrollTop(scrollTop: number) {
    this.scrollTop = scrollTop;
  }
}

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if (typeof window !== "undefined" && "memory" in performance) {
    const memory = (performance as any).memory;
    console.log("Memory Usage:", {
      "Used JS Heap Size": `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      "Total JS Heap Size": `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      "JS Heap Size Limit": `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`,
    });
  }
};

// Bundle size monitoring
export const logBundleSize = (componentName: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`${componentName} loaded`);
  }
};
