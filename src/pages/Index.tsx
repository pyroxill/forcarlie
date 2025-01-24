import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Timeline from "@/components/Timeline";
import RelationshipTimer from "@/components/RelationshipTimer";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.3;
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Remove the event listeners once music starts
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
          })
          .catch(error => {
            console.log("Audio playback failed:", error);
          });
      }
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isPlaying]);

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
      </div>
    </div>
  );
};

export default Index;