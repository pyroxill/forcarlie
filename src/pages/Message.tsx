import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Message = () => {
  return (
    <div className="min-h-screen py-8 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/76e55ce5-330f-4a0a-95c8-8a3f2a9c449f.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="container mx-auto px-4 max-w-lg relative z-10">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
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
              Forever yours <Heart className="inline-block text-red-500" />
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Message;