import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import Index from "./pages/Index";
import Message from "./pages/Message";
import MySongToYou from "./pages/MySongToYou";
import Reasons from "./pages/Reasons";
import Reassurance from "./pages/Reassurance";
import Puzzle from "./pages/Puzzle";
import ExtraGame from "./pages/ExtraGame";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="modern-nav">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center relative">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="absolute left-4 md:hidden text-white p-2 z-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto absolute md:relative left-0 top-16 md:top-0 bg-black/60 md:bg-transparent backdrop-blur-md p-4 md:p-0`}>
            <Link to="/" className="nav-link text-base md:text-base font-medium whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Home 🏠
            </Link>
            <Link to="/message" className="nav-link text-base md:text-base font-medium whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Message 💌
            </Link>
            <Link to="/my-song" className="nav-link text-base md:text-base font-medium whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Your Music 🎵
            </Link>
            <Link to="/reasons" className="nav-link text-base md:text-base font-medium whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> 24 Reasons 💝
            </Link>
            <Link to="/reassurance" className="nav-link text-base md:text-base font-medium whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Reassurance 🫂
            </Link>
            <Link to="/puzzle" className="nav-link text-base md:text-base font-medium whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Puzzle 🧩
            </Link>
            <Link to="/extra-game" className="nav-link text-base md:text-base font-medium whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Extra Game 🎲
            </Link>
          </div>
        </div>
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
            <div className="animate-flower">
              <div className="flower-petal petal-1"></div>
              <div className="flower-petal petal-2"></div>
              <div className="flower-petal petal-3"></div>
              <div className="flower-petal petal-4"></div>
              <div className="flower-petal petal-5"></div>
              <div className="flower-petal petal-6"></div>
              <div className="flower-center"></div>
            </div>
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
                <Route path="/reassurance" element={<Reassurance />} />
                <Route path="/puzzle" element={<Puzzle />} />
                <Route path="/extra-game" element={<ExtraGame />} />
                <Route path="/" element={<Index />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
