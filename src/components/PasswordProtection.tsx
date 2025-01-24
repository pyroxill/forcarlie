import { useState } from "react";
import { Heart } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const PasswordProtection = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [showGrowingHeart, setShowGrowingHeart] = useState(false);
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
        // Continue with unlock animation even if sound fails
      });
      
      setTimeout(() => {
        onUnlock();
      }, 5000); // Changed from 10000 to 5000 milliseconds
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect password 😕",
        description: "Please try again ❤️",
      });
    }
  };

  return (
    <div className="password-protection">
      {showGrowingHeart && (
        <div className="heart-container">
          <div className="heart-wrapper">
            <Heart className="big-heart" size={48} />
            <span className="heart-text">C+J</span>
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