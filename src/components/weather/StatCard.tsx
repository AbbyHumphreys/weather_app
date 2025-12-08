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
            <p>Feels Like</p>
            <p>{feelsLike}°</p>
        </div> 
        <div className="stat-card">
            <p>Humidity</p>
            <p>{humidity}%</p>
        </div> 
        <div className="stat-card">
            <p>Wind</p>
            <p>{windspeed} km/h</p>
        </div> 
        <div className="stat-card">
            <p>Precipitation</p>
            <p>{precipitation} mm</p>
        </div>
      </div>
    </>
        
    );
}