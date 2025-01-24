import { useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  "Your beautiful smile lights up my world",
  "The way you care for others",
  "Your infectious laugh",
  "Your determination and strength",
  "The way you make me feel special",
  "Your kindness to everyone",
  "The sparkle in your eyes",
  "Your amazing sense of humor",
  "How you always know what to say",
  "Your passion for life",
  "The way you dance when you're happy",
  "Your incredible intelligence",
  "How you make every day better",
  "Your creativity and imagination",
  "The way you support my dreams",
  "Your gentle heart",
  "How you understand me completely",
  "Your adorable quirks",
  "The way you make me laugh",
  "Your beautiful soul",
  "How you inspire me daily",
  "Your endless patience",
  "The way you love unconditionally",
  "Everything that makes you uniquely you"
];

const Reasons = () => {
  const [currentReason, setCurrentReason] = useState<number | null>(null);
  const [displayedReasons, setDisplayedReasons] = useState<number[]>([]);

  const handleHeartClick = () => {
    if (currentReason === null) {
      setCurrentReason(0);
      setDisplayedReasons([0]);
    } else if (currentReason < reasons.length - 1) {
      setCurrentReason(currentReason + 1);
      setDisplayedReasons([...displayedReasons, currentReason + 1]);
    } else {
      setCurrentReason(null);
      setDisplayedReasons([]);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold text-white mb-12">
          24 Reasons I Love You
        </h1>
        
        <div className="relative flex justify-center items-center min-h-[40vh] md:min-h-[60vh]">
          <motion.div
            className="cursor-pointer relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleHeartClick}
          >
            <Heart 
              size={150} 
              className="text-white fill-love hover:fill-love-light transition-colors"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
              C
            </span>
          </motion.div>

          <div className="fixed inset-0 pointer-events-none flex flex-wrap justify-center items-center gap-3 p-4 md:p-8 overflow-hidden">
            <AnimatePresence>
              {displayedReasons.map((index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="text-white text-center p-2 md:p-4 max-w-[250px] md:max-w-xs text-sm md:text-base"
                >
                  {reasons[index]}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {currentReason !== null && (
          <p className="text-center text-white mt-8">
            Tap the heart to see more reasons ({currentReason + 1}/24)
          </p>
        )}
      </div>
    </div>
  );
};

export default Reasons;