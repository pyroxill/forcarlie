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

  const handleHeartClick = () => {
    if (currentReason === null) {
      setCurrentReason(0);
    } else if (currentReason < reasons.length - 1) {
      setCurrentReason(currentReason + 1);
    } else {
      setCurrentReason(null);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold text-white mb-12">
          24 Reasons I Love You
        </h1>
        
        <div className="relative flex justify-center items-center min-h-[60vh]">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleHeartClick}
          >
            <Heart 
              size={120} 
              className="text-white fill-love hover:fill-love-light transition-colors"
            />
          </motion.div>

          <AnimatePresence>
            {currentReason !== null && (
              <motion.div
                initial={{ scale: 0, y: 0 }}
                animate={{ scale: 1, y: -100 }}
                exit={{ scale: 0, y: -200, opacity: 0 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-love shadow-xl max-w-xs">
                  <p className="text-white text-center">
                    {reasons[currentReason]}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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