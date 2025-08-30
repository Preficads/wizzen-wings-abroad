// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // ✅ Navbar always visible
import ScrollToTop from "./components/ScrollToTop"; // ✅ Scroll fix

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudyMBBS from "./pages/StudyMBBS";
import Services from "./components/Services"; // ✅ Main Services list page
import ServicesPage from "./pages/ServicesPage"; // ✅ Detailed service page
import About from "./pages/AboutPage"; // ✅ About page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Always scroll to top on route change */}
        <ScrollToTop />

        {/* ✅ Navbar always visible */}
        <Navbar />

        <div className="pt-20"> {/* Push content below fixed navbar */}
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Study MBBS */}
            <Route path="/mbbs" element={<StudyMBBS />} />

            {/* Services Section */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServicesPage />} />
            {/* Example: /services/study-abroad, /services/immigration */}

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
