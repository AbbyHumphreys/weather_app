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
            <div>{city}, {country}</div>
            <div>{dateLabel}</div>
          </div>
          <div><img src={weatherIcon} alt="Weather icon"  width="60px"/>{temperature}°</div>
        </section>
      </>
    );
}