import { useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen py-8 flex items-center justify-center">
      {!isOpen ? (
        <motion.div
          className="cursor-pointer flex flex-col items-center gap-4"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="text-white text-lg">Tap to open 💌</p>
          <Mail className="w-24 h-24 text-white" />
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-lg leading-relaxed max-w-lg mx-auto px-4"
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
    </div>
  );
};

export default Message;