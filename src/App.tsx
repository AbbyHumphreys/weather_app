import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from './services/weatherService.ts';
import type { CurrentWeather, Stats, DailyForecastItem, HourlyForecastItem } from './types/weatherTypes.ts';
import "./styles/main.sass";
import Header from './components/layouts/Header.tsx';
import SearchBar from './components/layouts/SearchBar.tsx';
import MainSection from './components/layouts/MainSection.tsx';

function App() {

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [dailyForecast, setDailyForecast] = useState<DailyForecastItem[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecastItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch on mount
  useEffect(() => {
    fetchCurrentWeather(52.52, 13.41, "metric")
      .then(({currentWeather, dailyForecast, hourlyForecast}) => {
        setCurrentWeather(currentWeather);
        setDailyForecast(dailyForecast);
        setHourlyForecast(hourlyForecast);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Sorry, we couldn't load the weather.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // ⏳ Loading state
  if (isLoading) {
    return (
      <div className="container">
        <Header />
        <p className="text-preset-7">Loading weather…</p>
      </div>
    );
  }

  // ❌ Error / no data
  if (error || !currentWeather) {
    return (
      <div className="container">
        <Header />
        <p className="text-preset-7">{error ?? "No weather data available"}</p>
      </div>
    );
  }
  
  const stats: Stats = {
    feelsLike: currentWeather.feelsLike,
    humidity: currentWeather.humidity,
    windspeed: currentWeather.windspeed,
    precipitation: currentWeather.precipitation,
  };

  return (
    
    <>
      <div className="container">
          <Header />
          <SearchBar />
          <MainSection 
            currentWeather={currentWeather}
            dailyForecast={dailyForecast}
            stats={stats}
            hourlyForecast={hourlyForecast}
          />
      </div>
    </>
  )
}

export default App
