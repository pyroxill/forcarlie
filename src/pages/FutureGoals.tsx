import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FutureGoals = () => {
  const goals = [
    {
      title: "Travel Together",
      description: "Explore beautiful places and create unforgettable memories",
      icon: "🌎"
    },
    {
      title: "Build Our Home",
      description: "Create a cozy space filled with love and laughter",
      icon: "🏠"
    },
    {
      title: "Grow Together",
      description: "Support each other's dreams and celebrate every milestone",
      icon: "🌱"
    },
    {
      title: "Create Traditions",
      description: "Make our own special moments and yearly celebrations",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link to="/">
          <Button variant="outline" className="mb-6 bg-black/80 text-love hover:bg-love hover:text-white border-love">
            <Heart className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <Card className="mb-8 bg-black/80 backdrop-blur border-love fade-scale-in">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-love">
              Our Journey Ahead ✨
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-200 mb-8">
              Every day with you makes me excited for our future together. Here are some dreams I want to share with you...
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <Card key={index} className="transform transition-all duration-300 hover:scale-105 bg-black/80 backdrop-blur border-love fade-scale-in">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-love flex items-center justify-center gap-2">
                  <span className="text-2xl">{goal.icon}</span>
                  {goal.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-center">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureGoals;