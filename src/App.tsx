import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import Index from "./pages/Index";
import Message from "./pages/Message";
import MySongToYou from "./pages/MySongToYou";
import Reasons from "./pages/Reasons";
import Reassurance from "./pages/Reassurance";
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
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto absolute md:relative left-0 top-16 md:top-0 bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-filter-none p-4 md:p-0`}>
            <Link to="/" className="nav-link text-sm md:text-base whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Home 🏠
            </Link>
            <Link to="/message" className="nav-link text-sm md:text-base whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Message 💌
            </Link>
            <Link to="/my-song" className="nav-link text-sm md:text-base whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Your Music 🎵
            </Link>
            <Link to="/reasons" className="nav-link text-sm md:text-base whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> 24 Reasons 💝
            </Link>
            <Link to="/reassurance" className="nav-link text-sm md:text-base whitespace-nowrap" onClick={() => setIsOpen(false)}>
              <Heart className="inline-block mr-1" size={14} /> Reassurance 🫂
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FlowerAnimation = ({ flowerType }: { flowerType: 'daisy' | 'rose' | 'hoya' | 'lily' }) => {
  const petalCount = {
    daisy: 8,
    rose: 12,
    hoya: 5,
    lily: 6
  };

  return (
    <div className={`animate-flower ${flowerType}`}>
      <div className="flower-stem"></div>
      <div className="flower-leaf left"></div>
      <div className="flower-leaf right"></div>
      {[...Array(petalCount[flowerType])].map((_, i) => (
        <div
          key={`petal-${i}`}
          className="flower-petal"
          style={{
            '--rotation': `${i * (360 / petalCount[flowerType])}deg`,
            animation: `petal-grow 1.5s ease-out ${i * 0.1}s forwards`
          } as React.CSSProperties}
        ></div>
      ))}
      <div className="flower-center"></div>
    </div>
  );
};

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);
  const [flowers, setFlowers] = useState<Array<'daisy' | 'rose' | 'hoya' | 'lily'>>([]);

  const handleUnlock = () => {
    setShowUnlockAnimation(true);
    // Create an array of 3 random flowers
    const flowerTypes = ['daisy', 'rose', 'hoya', 'lily'] as const;
    const randomFlowers = Array(3).fill(null).map(() => 
      flowerTypes[Math.floor(Math.random() * flowerTypes.length)]
    );
    setFlowers(randomFlowers);
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
            <div className="flowers-container">
              {flowers.map((flowerType, index) => (
                <div key={index} className="flower-wrapper" style={{
                  position: 'absolute',
                  left: `${25 + (index * 25)}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}>
                  <FlowerAnimation flowerType={flowerType} />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={`transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'} ${showUnlockAnimation ? 'hidden' : ''}`}>
          <BrowserRouter>
            <FloatingElements />
            <Navigation />
            <div className="content-container">
              <Routes>
                <Route path="/message" element={<Message />} />
                <Route path="/my-song" element={<MySongToYou />} />
                <Route path="/reasons" element={<Reasons />} />
                <Route path="/reassurance" element={<Reassurance />} />
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
