import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YouTubeSEO from "./pages/YouTubeSEO";
import YouTubeMarketing from "./pages/YouTubeMarketing";
import WebsiteSEO from "./pages/WebsiteSEO";
import CommunicationTools from "./pages/CommunicationTools";
import IncomeStrategies from "./pages/IncomeStrategies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import HelpCenter from "./pages/HelpCenter";
import SuccessStories from "./pages/SuccessStories";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Events from "./pages/Events";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/youtube-seo" element={<YouTubeSEO />} />
          <Route path="/youtube-marketing" element={<YouTubeMarketing />} />
          <Route path="/website-seo" element={<WebsiteSEO />} />
          <Route path="/communication-tools" element={<CommunicationTools />} />
          <Route path="/income-strategies" element={<IncomeStrategies />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
