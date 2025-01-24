import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-lg">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-white">
              My Heart's Message 💝
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            {!isOpen ? (
              <motion.div
                className="cursor-pointer flex flex-col items-center gap-4"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-white text-lg">Tap to open 💌</p>
                <Mail className="w-24 h-24 text-[#8B5CF6]" />
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-200 text-lg leading-relaxed"
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Message;