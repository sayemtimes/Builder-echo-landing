import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { PageLoader } from "@/components/LoadingComponents";
import { performanceLogger } from "@/utils/performance";
import { initializeDefaultData } from "@/lib/dataManager";

// Immediate load for critical pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load non-critical pages for better performance
const YouTubeSEO = lazy(() => import("./pages/YouTubeSEO"));
const YouTubeMarketing = lazy(() => import("./pages/YouTubeMarketing"));
const WebsiteSEO = lazy(() => import("./pages/WebsiteSEO"));
const CommunicationTools = lazy(() => import("./pages/CommunicationTools"));
const IncomeStrategies = lazy(() => import("./pages/IncomeStrategies"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Community = lazy(() => import("./pages/Community"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const SuccessStories = lazy(() => import("./pages/SuccessStories"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const Resources = lazy(() => import("./pages/Resources"));
const Events = lazy(() => import("./pages/Events"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Performance monitoring
    performanceLogger.markStart("app-init");

    // Initialize data management system
    initializeDefaultData();

    // Measure page load performance
    const measurePerformance = () => {
      performanceLogger.measurePageLoad();
      performanceLogger.markEnd("app-init");
    };

    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    // Preload critical resources
    const preloadFonts = () => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = "/fonts/inter.woff2";
      link.as = "font";
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    };

    preloadFonts();

    return () => {
      window.removeEventListener("load", measurePerformance);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/youtube-seo" element={<YouTubeSEO />} />
                <Route
                  path="/youtube-marketing"
                  element={<YouTubeMarketing />}
                />
                <Route path="/website-seo" element={<WebsiteSEO />} />
                <Route
                  path="/communication-tools"
                  element={<CommunicationTools />}
                />
                <Route
                  path="/income-strategies"
                  element={<IncomeStrategies />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/community" element={<Community />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/events" element={<Events />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
