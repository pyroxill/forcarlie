import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Timeline from "@/components/Timeline";
import RelationshipTimer from "@/components/RelationshipTimer";
import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showYay, setShowYay] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.3;
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
          })
          .catch(error => {
            console.log("Audio playback failed:", error);
          });
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isPlaying]);

  useEffect(() => {
    let timer: number;
    if (showYay) {
      timer = window.setTimeout(() => {
        setShowYay(false);
        setNoPosition({ x: 0, y: 0 });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showYay]);

  const handleNoHover = () => {
    if (isMobile) {
      setNoPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100)
      });
    } else {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      setNoPosition({ x, y });
    }
  };

  return (
    <div className="min-h-screen relative">
      <audio
        ref={audioRef}
        loop
        src="/background-music.mp3"
      />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <RelationshipTimer />
        </div>
        <Timeline />
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Together Forever...???</h2>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/72ee4165-cb3d-49f3-9d5a-96fd994f92c1.png"
              alt="Cute teddy bear with heart"
              className="w-64 h-64 object-contain rounded-lg"
            />
          </div>

          <div className="flex justify-center gap-16 items-center">
            <button
              onClick={() => setShowYay(true)}
              className="text-2xl font-bold text-white hover:scale-110 transition-transform"
            >
              Yes
            </button>
            
            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="text-2xl font-bold text-white transition-all duration-300"
              style={{
                position: noPosition.x ? 'fixed' : 'relative',
                left: noPosition.x,
                top: noPosition.y,
              }}
            >
              No
            </button>
          </div>
        </div>

        {showYay && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative">
              <h1 className="text-6xl font-bold text-white animate-bounce">Yayyy!</h1>
              <div className="absolute inset-0 -z-10">
                {[...Array(50)].map((_, i) => (
                  <Heart
                    key={i}
                    className="absolute text-white heart-explosion"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      transformOrigin: 'center',
                      animationDelay: `${Math.random() * 0.5}s`,
                      fontSize: `${Math.random() * 30 + 20}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;