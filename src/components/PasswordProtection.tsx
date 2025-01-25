import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const PasswordProtection = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [fadeOutText, setFadeOutText] = useState(false);
  const [fadeOutHeart, setFadeOutHeart] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "08/12/2024") {
      setIsUnlocking(true);
      setShowText(true);
      
      const audio = new Audio("/unlock-sound.mp3");
      audio.volume = 0.3;
      audio.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
      
      // Show text for 5 seconds, fade out in last 3
      setTimeout(() => {
        setFadeOutText(true);
      }, 2000);
      
      // After text fades, show heart
      setTimeout(() => {
        setShowText(false);
        setShowHeart(true);
        onUnlock(); // Unlock here to load index page behind heart
        
        // Start heart fade out after 7 seconds
        setTimeout(() => {
          setFadeOutHeart(true);
          
          // Remove heart component after fade animation
          setTimeout(() => {
            setShowHeart(false);
          }, 3000);
        }, 7000);
      }, 5000);
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect password 😕",
        description: "Please try again ❤️",
      });
    }
  };

  useEffect(() => {
    console.log("Setting up background music");
    const bgMusic = new Audio("/lovable-uploads/background-music.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    
    const playMusic = () => {
      console.log("Attempting to play music");
      bgMusic.play().catch(error => {
        console.log("Background music playback failed:", error);
      });
    };

    document.addEventListener('click', playMusic, { once: true });
    document.addEventListener('keydown', playMusic, { once: true });

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      document.removeEventListener('click', playMusic);
      document.removeEventListener('keydown', playMusic);
    };
  }, []);

  if (showText) {
    return (
      <div className="password-protection">
        <div className="text-container">
          <h1 className={`valentine-text ${fadeOutText ? 'fade-out' : ''}`}>
            Happy Valentines, Carlie<br/>- Jayden
          </h1>
        </div>
      </div>
    );
  }

  if (showHeart) {
    return (
      <div className={`password-protection ${fadeOutHeart ? 'reveal-background' : ''}`}>
        <div className="heart-container">
          <div className="heart-wrapper">
            <Heart className={`big-heart ${fadeOutHeart ? 'fade-out' : ''}`} size={48} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="password-protection">
      <div className="password-container">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <Heart className="w-16 h-16 text-white animate-pulse" />
          </div>
          <div className="text-white text-center mb-4">
            <h2 className="text-xl font-semibold mb-2">Enter Password 🔒</h2>
            <p className="text-sm opacity-80">Hint: Our Anniversary ❤️</p>
          </div>
          <form onSubmit={handleSubmit} className="w-64">
            <Input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-[#D946EF]"
              placeholder="DD/MM/YYYY"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;