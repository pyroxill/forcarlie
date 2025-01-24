import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-lg">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-white">
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

        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button variant="outline" className="bg-black/80 text-white hover:bg-love hover:text-white border-love">
              <Heart className="mr-2 h-4 w-4" /> Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;