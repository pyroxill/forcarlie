import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const questions = [
  "What part of my body do you love the most, and why?",
  "Share your favorite intimate memory together",
  "Kiss your partner's neck for 30 seconds",
  "Whisper something seductive in your partner's ear",
  "What's a specific memory of ours that turns you on?",
  "Share a fantasy you've never told anyone",
  "Take off one piece of clothing",
  "Give your partner a compliment about their body",
  "Demonstrate your favorite kiss",
  "Share what attracts you most about your partner",
  "If I gave you control for the night, what would you want me to do?",
  "What's the most attractive thing I do without realizing it?", 
  "Give your partner a 30 second kiss without using your hands.",
  "Blindfold your partner and kiss or touch them in three random spots; they must guess where.",
  "Let your partner choose a “forbidden” place to kiss or touch.",
  "What’s your favorite position and why?",
  "What’s one thing we’ve done together that you’d love to relive?",
  "What’s the naughtiest thought you’ve had about me today?",
  "Let your partner pick a word, and every time you say it, remove an article of clothing.",
  "Let your partner lay back and give them a kiss trail that starts at their lips and ends wherever you choose.", 
  "Give Oral for 30 seconds", 
  "Tease your partner for a minute", 
  "Give a handjob or finger your partner for 30 seconds"
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
          <h1 className="text-4xl font-bold text-white">Intimate Moments 🥰</h1>
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
