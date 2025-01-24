import { useState, useEffect } from 'react';

const RelationshipTimer = () => {
  const [duration, setDuration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2024-12-08T20:00:00Z'); // GMT time

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      // Calculate the duration
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setDuration({ days, hours, minutes, seconds });
    };

    // Update immediately and then every second
    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white text-center p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">We've Been Together For</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{duration.days}</span>
          <span className="text-sm opacity-80">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{duration.hours}</span>
          <span className="text-sm opacity-80">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{duration.minutes}</span>
          <span className="text-sm opacity-80">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{duration.seconds}</span>
          <span className="text-sm opacity-80">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default RelationshipTimer;