// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // ✅ Import Navbar
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudyMBBS from "./pages/StudyMBBS"; // ✅ Import the new Study MBBS page

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
            <Route path="/mbbs" element={<StudyMBBS />} /> {/* Study MBBS route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
