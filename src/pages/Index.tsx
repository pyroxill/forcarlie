import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-pink-600">
              For My Love ❤️
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-700">
              Welcome to our special place. I made this website just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/message">
                <Button variant="outline">
                  <Heart className="mr-2 h-4 w-4" />
                  My Message To You
                </Button>
              </Link>
              <Link to="/future-goals">
                <Button variant="outline">
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