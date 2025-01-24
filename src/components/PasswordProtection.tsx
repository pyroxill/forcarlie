import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const PasswordProtection = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for background music
    audioRef.current = new Audio("/background-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    // Start playing when component mounts
    audioRef.current.play().catch(error => console.log("Audio playback failed:", error));

    // Cleanup function to stop music when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const fadeOutAndStop = () => {
    if (!audioRef.current) return;
    
    const fadeInterval = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(fadeInterval);
        return;
      }
      
      if (audioRef.current.volume > 0.01) {
        audioRef.current.volume -= 0.01;
      } else {
        audioRef.current.pause();
        clearInterval(fadeInterval);
      }
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "carlile") {
      setIsUnlocking(true);
      fadeOutAndStop();
      setTimeout(() => {
        onUnlock();
      }, 1000);
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect password",
        description: "Please try again",
      });
    }
  };

  return (
    <div className={`password-protection ${isUnlocking ? "animate-fade-out" : ""}`}>
      <div className="password-container">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <Heart className="w-16 h-16 text-[#ea384c] animate-pulse" />
          </div>
          <form onSubmit={handleSubmit} className="w-64">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-[#D946EF]"
              placeholder="Enter password"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;