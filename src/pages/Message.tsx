import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Message = () => {
  const memories = [
    {
      date: "The day we met",
      title: "Our First Hello",
      description: "The moment that changed everything"
    },
    {
      date: "Our first date",
      title: "Beginning of Forever",
      description: "When we knew this was special"
    },
    // Add more memories here!
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-8">
      <div className="container mx-auto px-4">
        <Card className="mb-8 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-pink-600">
              My Heart's Message 💝
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              To my dearest, <br/><br/>
              Every day with you feels like a beautiful dream come true. Your smile lights up my world, 
              and your love makes everything better. I cherish every moment we spend together and look forward 
              to creating countless more memories with you. You're not just my partner - you're my best friend, 
              my confidante, and my greatest blessing.
              <br/><br/>
              Forever yours ❤️
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-pink-600">
              Our Story So Far ✨
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {memories.map((memory, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-pink-300">
                    <div className="absolute -left-1.5 top-0 h-4 w-4 rounded-full bg-pink-500" />
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-pink-600 font-semibold">{memory.date}</h3>
                    <h4 className="text-lg font-medium text-gray-800">{memory.title}</h4>
                    <p className="text-gray-600">{memory.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-center space-x-4">
          <Link to="/">
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" /> Home
            </Button>
          </Link>
          <Link to="/future-goals">
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" /> Our Future Together
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;