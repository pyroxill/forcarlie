import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const questions = [
  "Give your partner a sensual massage for 5 minutes",
  "Share your favorite intimate memory together",
  "Kiss your partner's neck for 30 seconds",
  "Whisper something seductive in your partner's ear",
  "Give your partner a gentle back scratch",
  "Share a fantasy you've never told anyone",
  "Take off one piece of clothing",
  "Give your partner a compliment about their body",
  "Demonstrate your favorite kiss",
  "Share what attracts you most about your partner"
];

export default function ExtraGame() {
  const [currentQuestion, setCurrentQuestion] = useState("");

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    toast("New challenge revealed! 💕");
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Intimate Moments</h1>
          <p className="text-white/80">Share special moments together with these romantic challenges</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
          {currentQuestion ? (
            <p className="text-xl text-white text-center mb-8">{currentQuestion}</p>
          ) : (
            <p className="text-xl text-white/60 text-center mb-8">Click the button to start...</p>
          )}
          
          <div className="flex justify-center">
            <Button 
              onClick={getRandomQuestion}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-6 text-lg"
            >
              Get New Challenge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}