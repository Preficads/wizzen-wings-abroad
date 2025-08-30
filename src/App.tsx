// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // ✅ Navbar always visible
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudyMBBS from "./pages/StudyMBBS"; 
import ServicesPage from "./pages/ServicesPage"; // ✅ Import Services page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Navbar always visible */}
        <Navbar />
        <div className="pt-20"> {/* Push content below fixed navbar */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mbbs" element={<StudyMBBS />} />
            <Route path="/services" element={<ServicesPage />} /> {/* ✅ Services Route */}
            
            {/* Catch-all 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
