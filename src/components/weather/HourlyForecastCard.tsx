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
        <>
          <div className="hourly-forecast-container">
            <div className="hourly-forecast-card"><img className="weather-icon" src={weatherIcon} alt="Weather icon" />{timeLabel}{temperature}</div>
          </div>
        </>
        
    );
}