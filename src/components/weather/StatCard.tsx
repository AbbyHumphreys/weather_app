import React from "react";

type StatsCardProps = {
    feelsLike: number;
    humidity: number;
    windspeed: number;
    precipitation: number;
};

export default function StatsCard ({ feelsLike, humidity, windspeed, precipitation }: StatsCardProps) {
  return (
    <>
      <div className="stats-card-container">
        <div className="stat-card">
            <p className="text-preset-6">Feels Like</p>
            <p className="text-preset-7">{feelsLike}°</p>
        </div> 
        <div className="stat-card">
            <p className="text-preset-6">Humidity</p>
            <p className="text-preset-7">{humidity}%</p>
        </div> 
        <div className="stat-card">
            <p className="text-preset-6">Wind</p>
            <p className="text-preset-7">{windspeed} km/h</p>
        </div> 
        <div className="stat-card">
            <p className="text-preset-6">Precipitation</p>
            <p className="text-preset-7">{precipitation} mm</p>
        </div>
      </div>
    </>
        
    );
}