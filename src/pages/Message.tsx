import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetters, setShowLetters] = useState(false);

  const handleEnvelopeClick = () => {
    setShowLetters(true);
    setTimeout(() => {
      setShowLetters(false);
      setIsOpen(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-8 flex items-center justify-center">
      <Card className="card-gradient max-w-lg w-full mx-4">
        <CardContent className="p-8 flex items-center justify-center min-h-[400px]">
          <AnimatePresence>
            {!isOpen && !showLetters && (
              <motion.div
                className="cursor-pointer flex flex-col items-center gap-4"
                onClick={handleEnvelopeClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-white text-lg">Tap to open 💌</p>
                <Mail className="w-24 h-24 text-white" />
              </motion.div>
            )}

            {showLetters && (
              <div className="relative w-24 h-24">
                {['C', 'J'].map((letter, i) => (
                  <motion.div
                    key={letter}
                    className="absolute text-4xl font-bold text-white"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ 
                      y: -100,
                      opacity: [0, 1, 0],
                      x: i === 0 ? -50 : 50,
                      rotate: i === 0 ? -45 : 45
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
            )}

            {isOpen && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-lg leading-relaxed"
              >
                To my dearest, <br/><br/>
                Every day with you feels like a beautiful dream come true. Your smile lights up my world, 
                and your love makes everything better. I cherish every moment we spend together and look forward 
                to creating countless more memories with you. You're not just my partner - you're my best friend, 
                my confidante, and my greatest blessing. 💕
                <br/><br/>
                Forever yours ❤️
              </motion.p>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;