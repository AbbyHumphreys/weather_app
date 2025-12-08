import React from "react";

type HourlyForecastItemProps = {
  time: Date;
  weatherIcon: string;
  temperature: number;
};

export default function HourlyForecastItem ({ time, weatherIcon, temperature }: HourlyForecastItemProps) {
  const timeLabel = time.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
}); 
  return (
        <div>This is the time: {timeLabel}, {temperature} and <img src={weatherIcon} alt="Weather icon" /></div>
    );
}