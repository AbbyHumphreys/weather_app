import React from "react";
import CurrentWeatherCard from "../weather/CurrentWeatherCard";
import DailyForecastCard from "../weather/DailyForecastCard";
import HourlyForecastCard from "../weather/HourlyForecastCard";
import StatCard from "../weather/StatCard";
import type { CurrentWeather, Stats } from "../../types/weatherTypes";
import type { DailyForecastItem } from "../../types/weatherTypes";
import type { HourlyForecastItem as HourlyForecastItemType } from "../../types/weatherTypes";

type MainSectionProps = {
  currentWeather: CurrentWeather;        
  dailyForecast: DailyForecastItem[];
  stats: Stats; 
  hourlyForecast: HourlyForecastItemType[];
};

export default function MainSection ({
  currentWeather,
  stats,
  dailyForecast,
  hourlyForecast
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
                    <div className="title text-preset-5">Daily Forecast</div>
                    <div className="daily-forecast-list">
                      {dailyForecast.map((item) => (
                        <DailyForecastCard
                          key={item.date.toISOString()}
                          {...item}
                        />
                      ))}
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="hourly-forecast-section">
                    <div className="title-section">
                      <div className="title text-preset-5">Hourly Forecast</div>
                      <div className="day-container text-preset-7">Tuesday</div>
                    </div>
                    {hourlyForecast.map((item) => (
                      <HourlyForecastCard
                        key={item.time.toISOString()}
                        {...item}
                      />
                    ))}
                </div>
            </div>
        </section>
      </>
    );
}