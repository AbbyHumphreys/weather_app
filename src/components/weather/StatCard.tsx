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
            {feelsLike}
        </div> 
        <div className="stat-card">
            <p>Humidity</p>
            {humidity}
        </div> 
        <div className="stat-card">
            <p>Windspeed</p>
            {windspeed}
        </div> 
        <div className="stat-card">
            <p>Precipitation</p>
            {precipitation}
        </div>
      </div>
    </>
        
    );
}