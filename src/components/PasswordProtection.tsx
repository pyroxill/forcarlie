import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const PasswordProtection = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [showGrowingHeart, setShowGrowingHeart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "08/12/2024") {
      setIsUnlocking(true);
      setShowGrowingHeart(true);
      
      // Try to play the unlock sound
      const audio = new Audio("/unlock-sound.mp3");
      audio.volume = 0.3;
      audio.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
      
      setTimeout(() => {
        setShowGrowingHeart(false);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          onUnlock();
        }, 3000);
      }, 2000);
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect password 😕",
        description: "Please try again ❤️",
      });
    }
  };

  // Background music setup
  useEffect(() => {
    const bgMusic = new Audio("/background-music.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    
    const playMusic = () => {
      bgMusic.play().catch(error => {
        console.log("Background music playback failed:", error);
      });
    };

    // Try to play music on first user interaction
    document.addEventListener('click', playMusic, { once: true });
    document.addEventListener('keydown', playMusic, { once: true });

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      document.removeEventListener('click', playMusic);
      document.removeEventListener('keydown', playMusic);
    };
  }, []);

  if (showMessage) {
    return (
      <div className="password-protection">
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-4xl text-white text-center font-bold animate-fade-in">
            Happy Valentines, Carlie<br/>- Jayden
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="password-protection">
      {showGrowingHeart && (
        <div className="heart-container">
          <div className="heart-wrapper">
            <Heart className="big-heart" size={48} />
          </div>
        </div>
      )}
      {!isUnlocking && (
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
      )}
    </div>
  );
};

export default PasswordProtection;