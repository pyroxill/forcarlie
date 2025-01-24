import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = {
  "Feeling Down 😔": {
    options: [
      "I'm feeling sad today",
      "I miss you",
      "I had a rough day",
    ],
    responses: [
      "Remember how much I love you. You're the most precious person in my life, and seeing you sad breaks my heart. Let me hold you tight and make it better. ❤️",
    ]
  },
  "Anxious Thoughts 😟": {
    options: [
      "I'm worried about the future",
      "I'm feeling overwhelmed",
      "I'm stressed about work",
    ],
    responses: [
      "Take a deep breath, my love. We're in this together, and I'll always be here to support you. You're stronger than you know, and I believe in you completely. 🫂",
    ]
  },
  "Need Reassurance 🥺": {
    options: [
      "Do you really love me?",
      "Are we going to be okay?",
      "Will you always be there?",
    ],
    responses: [
      "My darling, you are my everything. Every day I fall more in love with you, and my heart belongs to you completely. Never doubt my love - it's eternal and unconditional. 💝",
    ]
  },
  "Just Testing 🧪": {
    options: [
      "Test message 1",
      "Test message 2",
      "Test message 3",
    ],
    responses: [
      "This is a test response! 🎯",
    ]
  }
};

const Reassurance = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedConcern, setSelectedConcern] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedConcern("");
    setResponse("");
  };

  const handleConcernChange = (value: string) => {
    setSelectedConcern(value);
    const categoryResponses = categories[selectedCategory as keyof typeof categories].responses;
    setResponse(categoryResponses[0]);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 space-y-8 max-w-3xl">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-white">
              Tell me what's on your mind 💭
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <Select onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Choose a category..." />
                </SelectTrigger>
                <SelectContent className="bg-white/95">
                  {Object.keys(categories).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedCategory && (
                <Select onValueChange={handleConcernChange}>
                  <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="What's bothering you?" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95">
                    {categories[selectedCategory as keyof typeof categories].options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {response && (
                <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20 text-white">
                  <p className="text-lg leading-relaxed">{response}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reassurance;