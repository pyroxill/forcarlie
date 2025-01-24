import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-love/20 to-black" />
      
      {/* Decorative roses */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="flowers-animation">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="flower"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Card className="max-w-2xl mx-auto bg-black/80 backdrop-blur border-love">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-love">
              For My Love ❤️
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-200">
              Welcome to our special place. I made this website just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/message">
                <Button variant="outline" className="bg-black/80 text-love hover:bg-love hover:text-white border-love">
                  <Heart className="mr-2 h-4 w-4" />
                  My Message To You
                </Button>
              </Link>
              <Link to="/future-goals">
                <Button variant="outline" className="bg-black/80 text-love hover:bg-love hover:text-white border-love">
                  <Heart className="mr-2 h-4 w-4" />
                  Our Future Together
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;