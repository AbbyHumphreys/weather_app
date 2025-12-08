import React from "react";
import CurrentWeatherCard from "../weather/CurrentWeatherCard";
import DailyForecastCard from "../weather/DailyForecastCard";
import StatCard from "../weather/StatCard";
import type { CurrentWeather, Stats } from "../../types/weatherTypes";
import type { DailyForecastItem } from "../../types/weatherTypes";

type MainSectionProps = {
  currentWeather: CurrentWeather;        
  dailyForecast: DailyForecastItem[];
  stats: Stats; 
  // hourlyForecast: HourlyForecastItemType[];
};

export default function MainSection ({
  currentWeather,
  stats,
  dailyForecast
}: MainSectionProps){
   
  return (
      <>
        <section className="main-section">
            <div className="left-side">
                <div className="current-weather-section">
                    <CurrentWeatherCard {...currentWeather}/>
                </div>
                <div className="stats-section">
                    <StatCard {...stats} />
                </div>
                <div className="daily-forecast-section">
                    {dailyForecast.map((item) => (
                      <DailyForecastCard
                        key={item.date.toISOString()}
                        {...item}
                      />
                    ))}
                </div>
            </div>
            <div className="right-side">
                <div className="hourly-forecast-section">
                    <p>HourlyForecast Section</p>
                </div>
            </div>
        </section>
      </>
    );
}