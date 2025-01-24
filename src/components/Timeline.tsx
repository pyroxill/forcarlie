import { Card, CardContent } from "./ui/card";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "9/11/2024",
    title: "The First Glance",
    description: "We locked eyes for the first time at Danielle's 18th birthday party."
  },
  {
    date: "10/11/2024",
    title: "The First Connection",
    description: "Carlie added Jayden on Snapchat, and we sent each other our first snaps."
  },
  {
    date: "12/11/2024",
    title: "The First Message",
    description: "Jayden sent Carlie the first message, and we started to get to know each other."
  },
  {
    date: "22/11/2024",
    title: "Our First Meet-Up",
    description: "Carlie came over to Jayden's house for the first time."
  },
  {
    date: "4/12/2024",
    title: "Celebrated Jayden's 18th Birthday",
    description: "We celebrated Jayden's 18th birthday together."
  },
  {
    date: "8/12/2024",
    title: "We Made It Official",
    description: "The day we made it official and started dating, couple of days later we said I love you."
  },
  {
    date: "24/12/2024",
    title: "Celebrated Carlie's 17 Birthday and Christmas Eve Together",
    description: "We celebrated Carlie's 17th birthday and Christmas Eve together."
  },
  {
    date: "31/12/2024",
    title: "New Year's Eve",
    description: "We celebrated New Year's Eve together with Jayden's family, our first ever sleepover."
  },
  {
    date: "17/1/2025",
    title: "Our First Date",
    description: "We went on our first date dinner at Nandos."
  }
];

const Timeline = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 relative">
      <div className="absolute w-0.5 h-full bg-gradient-to-b from-pink-500 to-purple-500 left-1/2 transform -translate-x-1/2" />
      {timelineEvents.map((event, index) => (
        <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
          <div className="w-1/2" />
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-love" />
          </div>
          <Card className="w-1/2 card-gradient">
            <CardContent className="p-4">
              <div className="text-sm text-pink-300">{event.date}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
              <p className="text-gray-200">{event.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Timeline;