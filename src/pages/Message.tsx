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
    }, 1000);
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
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
            )}

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-lg leading-relaxed"
              >
                To Carlie, <br/><br/>
                Meeting you was the best thing that ever happened to me, but getting to know you, seeing the true you, the inner child in you, has been the biggest honor of my life. You've managed to heal parts of me I never believed could ever be healed and for that, I am forever grateful. Not a second goes by where I am not thankful for you and the love you've shown me. You've changed my whole perspective on life and love.
                You are the best thing to ever happen to me, truly. You showed me that the world isn't as cruel as it's made out to be or as I once believed it to be. You are so gorgeous and beautiful, inside and out. I love your smile so much it's so precious. I love your laugh it's so contagious. I love seeing you happy, it makes my day. You are everything to me.
                We may be young, but I know what I want, and I want you. I want to spend the rest of my life with you. I want to be there for you when you're down and when you're happy. I want to be your rock, your shoulder to cry on, your best friend, your lover—your everything—because you're my everything.
                I love you so much, Carlie. I love you more than words can describe. Don't ever change you are one of a kind, so special to me. I love you so much. I can't wait to see what the future holds for us. <br/><br/>
                Forever yours - Jayden ❤️
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
