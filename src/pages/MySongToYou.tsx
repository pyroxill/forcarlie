import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MySongToYou = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 space-y-8 max-w-3xl">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-white">
              This song was made about you
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-white text-center whitespace-pre-line leading-relaxed text-lg mx-auto max-w-2xl">
              {`You look so wonderful in your dress
I love your hair like that
The way it falls on the side of your neck
Down your shoulders and back
We are surrounded by all of these lies
And people that talk too much
You got the kind of look in your eyes
As if no one knows anything but us
Should this be the last thing I see?
I want you to know it's enough for me
'Cause all that you are is all that I'll ever need
I'm so in love
So in love
So in love
I'm so in love
You look so beautiful in this light
Your silhouette over me
The way it brings out the blue in your eyes
Is the Tenerife sea
And all of the voices surrounding us here
They just fade out when you take a breath
Just say the word and I will disappear
Into the wilderness
Should this be the last thing I see?
I want you to know it's enough for me
'Cause all that you are is all that I'll ever need
I'm so in love
So in love
So in love
So in love
Lumière, darling
Lumière over me
Lumière, darling
Lumière over me
Lumière, darling
Lumière over me
Should this be the last thing I see?
I want you to know it's enough for me
'Cause all that you are is all that I'll ever need
So in love
So in love
So in love, love, love, love
So in love
You look so wonderful in your dress
I love your hair like that
And in a moment, I knew you best`}
            </div>

            <div className="space-y-4">
              <iframe 
                style={{ borderRadius: "12px" }} 
                src="https://open.spotify.com/embed/track/1HbcclMpw0q2WDWpdGCKdS?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>

            <div>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-white">
                  A Playlist Just for You
                </CardTitle>
              </CardHeader>
              <CardContent>
               <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0gkaMm4dsDgMowjCOpbA8l?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </CardContent>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MySongToYou;
