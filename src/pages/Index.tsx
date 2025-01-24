import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;