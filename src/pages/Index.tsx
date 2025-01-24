import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Timeline from "@/components/Timeline";
import RelationshipTimer from "@/components/RelationshipTimer";
import { useEffect, useRef } from "react";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // You can add your background music file to the public folder
    // and reference it here
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set initial volume to 30%
      audioRef.current.play().catch(error => {
        console.log("Audio autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      <audio
        ref={audioRef}
        loop
        src="/your-background-music.mp3" // Add your music file here
      />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <RelationshipTimer />
        </div>
        <Timeline />
      </div>
    </div>
  );
};

export default Index;