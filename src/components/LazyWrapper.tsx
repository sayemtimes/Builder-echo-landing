import { Suspense, lazy, ComponentType } from "react";
import { PageLoader } from "@/components/LoadingComponents";

export function createLazyComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
): ComponentType<React.ComponentProps<T>> {
  const LazyComponent = lazy(importFn);

  return function WrappedComponent(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={<PageLoader />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

export function withIntersectionObserver<T extends ComponentType<any>>(
  Component: T,
): ComponentType<React.ComponentProps<T>> {
  return function IntersectionComponent(props: React.ComponentProps<T>) {
    return (
      <div className="min-h-[100px]">
        <Component {...props} />
      </div>
    );
  };
}
