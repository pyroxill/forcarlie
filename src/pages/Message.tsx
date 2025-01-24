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
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Card className="mb-8 bg-black/80 backdrop-blur border-love fade-scale-in">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-love">
              My Heart's Message 💝
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-200 text-lg leading-relaxed">
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

        <div className="mb-8 flex justify-center space-x-4">
          <Link to="/">
            <Button variant="outline" className="bg-black/80 text-love hover:bg-love hover:text-white border-love">
              <Heart className="mr-2 h-4 w-4" /> Home
            </Button>
          </Link>
          <Link to="/future-goals">
            <Button variant="outline" className="bg-black/80 text-love hover:bg-love hover:text-white border-love">
              <Heart className="mr-2 h-4 w-4" /> Our Future Together
            </Button>
          </Link>
        </div>

        <Card className="bg-black/80 backdrop-blur border-love fade-scale-in">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-love">
              Our Story So Far ✨
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {memories.map((memory, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-love">
                    <div className="absolute -left-1.5 top-0 h-4 w-4 rounded-full bg-love" />
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-love font-semibold">{memory.date}</h3>
                    <h4 className="text-lg font-medium text-white">{memory.title}</h4>
                    <p className="text-gray-300">{memory.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Message;