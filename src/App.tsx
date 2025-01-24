import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="modern-nav">
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute left-4 text-white p-2"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex flex-col md:flex-row 
        absolute md:relative 
        top-16 md:top-0 
        left-0 md:left-auto 
        w-full md:w-auto 
        bg-black/80 md:bg-transparent 
        backdrop-blur-md md:backdrop-blur-none
        py-4 md:py-0
        space-y-4 md:space-y-0
        items-center
      `}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          <Heart className="inline-block mr-2" size={16} />
          Home
        </Link>
        <Link to="/message" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          <Heart className="inline-block mr-2" size={16} />
          Message
        </Link>
        <Link to="/my-song" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          <Heart className="inline-block mr-2" size={16} />
          My Song
        </Link>
        <Link to="/reasons" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          <Heart className="inline-block mr-2" size={16} />
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