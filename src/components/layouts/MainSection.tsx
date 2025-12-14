import React, { useEffect, useState } from "react";
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
  
  const [selectedDay, setSelectedDay] = useState<string>("");
  
  useEffect(() => {
  if (dailyForecast.length === 0) return;

  setSelectedDay((prev) => {
      if (prev !== "") return prev; // user already picked a day
      return dailyForecast[0].date.toISOString().slice(0, 10);
    });
  }, [dailyForecast]);

  const toDayKey = (d: Date) => d.toISOString().slice(0, 10);

  const filteredHourly = hourlyForecast.filter((item) => {
    return toDayKey(item.time) === selectedDay;
  });

  const visibleHourly = filteredHourly.slice(0, 8);



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
                      <select
                        className="day-container text-preset-7"
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                      >
                        {dailyForecast.map((day) => {
                          const value = toDayKey(day.date);
                          const label = day.date.toLocaleDateString("en-GB", { weekday: "long" });

                          return (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {visibleHourly.map((item) => (
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