import React from "react";

type CurrentWeatherCardProps = {
  city: string;
  country: string;
  date: Date;
  temperature: number;
  weatherIcon: string;
};

export default function CurrentWeatherCard ({ city, country, date, temperature, weatherIcon }: CurrentWeatherCardProps) {
  const dateLabel = date.toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "short",
});  
  return (
      <>
        <section className="current-weather-container">
          <div className="location-container">
            <div className="text-preset-4">{city}, {country}</div>
            <div className="text-preset-6">{dateLabel}</div>
          </div>
          <div><img src={weatherIcon} alt="Weather icon"  width="60px"/><span className="text-preset-1">{temperature}°</span></div>
        </section>
      </>
    );
}