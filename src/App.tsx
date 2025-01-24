import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Index from "./pages/Index";
import Message from "./pages/Message";
import MySongToYou from "./pages/MySongToYou";
import Reasons from "./pages/Reasons";
import PasswordProtection from "./components/PasswordProtection";

const queryClient = new QueryClient();

const FloatingElements = () => {
  return (
    <div className="floating-hearts">
      {[...Array(40)].map((_, i) => (
        <Heart
          key={`heart-${i}`}
          className="floating-heart text-white"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-50px`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 40 + 20}px`,
          }}
        />
      ))}
      {['C', 'J'].map((letter, i) => (
        <div
          key={`letter-${letter}`}
          className="floating-letter"
          style={{
            left: `${20 + i * 60}%`,
            bottom: `-50px`,
            animationDelay: `${Math.random() * 8}s`,
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
      <div className="flex flex-row justify-center items-center space-x-2 md:space-x-4 px-2 md:px-4 w-full overflow-x-auto">
        <Link to="/" className="nav-link text-sm md:text-base whitespace-nowrap">
          <Heart className="inline-block mr-1" size={14} />
          Home
        </Link>
        <Link to="/message" className="nav-link text-sm md:text-base whitespace-nowrap">
          <Heart className="inline-block mr-1" size={14} />
          Message
        </Link>
        <Link to="/my-song" className="nav-link text-sm md:text-base whitespace-nowrap">
          <Heart className="inline-block mr-1" size={14} />
          My Song
        </Link>
        <Link to="/reasons" className="nav-link text-sm md:text-base whitespace-nowrap">
          <Heart className="inline-block mr-1" size={14} />
          24 Reasons
        </Link>
      </div>
    </nav>
  );
};

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);

  const handleUnlock = () => {
    setShowUnlockAnimation(true);
    setTimeout(() => {
      setShowUnlockAnimation(false);
      setIsUnlocked(true);
    }, 3000);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!isUnlocked && <PasswordProtection onUnlock={handleUnlock} />}
        {showUnlockAnimation && (
          <div className="unlock-animation">
            <Heart className="big-heart" />
          </div>
        )}
        <div className={`transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
          <BrowserRouter>
            <FloatingElements />
            <Navigation />
            <div className="content-container">
              <Routes>
                <Route path="/message" element={<Message />} />
                <Route path="/my-song" element={<MySongToYou />} />
                <Route path="/reasons" element={<Reasons />} />
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