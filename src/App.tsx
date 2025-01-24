import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Index from "./pages/Index";
import FutureGoals from "./pages/FutureGoals";
import Message from "./pages/Message";
import PasswordProtection from "./components/PasswordProtection";

const queryClient = new QueryClient();

const FloatingElements = () => {
  return (
    <div className="floating-hearts">
      {[...Array(15)].map((_, i) => (
        <Heart
          key={`heart-${i}`}
          className="floating-heart text-pink-500"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        />
      ))}
      {['C', 'J'].map((letter, i) => (
        <div
          key={`letter-${letter}`}
          className="floating-letter"
          style={{
            left: `${20 + i * 60}%`,
            animationDelay: `${Math.random() * 20}s`,
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="modern-nav">
      <Link to="/" className="nav-link">
        <Heart className="inline-block mr-2" size={16} />
        Home
      </Link>
      <Link to="/message" className="nav-link">
        <Heart className="inline-block mr-2" size={16} />
        Message
      </Link>
      <Link to="/future-goals" className="nav-link">
        <Heart className="inline-block mr-2" size={16} />
        Future Goals
      </Link>
    </nav>
  );
};

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!isUnlocked && <PasswordProtection onUnlock={() => setIsUnlocked(true)} />}
        <div className={`transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
          <BrowserRouter>
            <FloatingElements />
            <Navigation />
            <div className="content-container">
              <Routes>
                <Route path="/message" element={<Message />} />
                <Route path="/future-goals" element={<FutureGoals />} />
                <Route path="/" element={<Index />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;