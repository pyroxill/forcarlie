import { useState } from "react";
import { Heart, Lock } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const PasswordProtection = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "carlile") {
      setIsUnlocking(true);
      setTimeout(() => {
        onUnlock();
      }, 3000); // Wait for animation to complete
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect password",
        description: "Please try again",
      });
    }
  };

  return (
    <div className={`fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center 
      ${isUnlocking ? "animate-fade-out" : "animate-fade-in"}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-pink-100 rounded-full scale-[2] blur-xl animate-pulse" />
        <div className="relative bg-white/80 p-8 rounded-full shadow-xl">
          <div className="w-32 h-32 flex flex-col items-center justify-center">
            <Heart className="w-16 h-16 text-pink-500 mb-2" />
            <Lock className="w-6 h-6 text-pink-500 absolute" />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="absolute mt-40">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white/80 border-pink-200 focus:border-pink-500"
          placeholder="Enter password"
        />
      </form>
      {isUnlocking && (
        <div className="fixed bottom-0 left-0 right-0 overflow-hidden">
          <div className="flowers-animation">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flower"
                style={{
                  left: `${i * 10}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordProtection;