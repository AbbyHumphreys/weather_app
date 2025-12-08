import { useState } from 'react'
import "./styles/main.sass";
import DrizzleIcon from "../src/assets/images/icon-drizzle.webp";
import Header from './components/layouts/Header.tsx';
import SearchBar from './components/layouts/SearchBar.tsx';
import MainSection from './components/layouts/MainSection.tsx';



function App() {
  const currentWeather = {
    city: "Dublin",
    country: "Ireland",
    date: new Date("2025-06-15T09:00:00Z"),
    temperature: 20,
    weatherIcon: DrizzleIcon,
  }

  const stats = {
    feelsLike: 18,
    humidity: 46,
    windspeed: 14,
    precipitation: 0
  }

  const dailyForecast = [
  {
    date: new Date("2025-06-15"),
    weatherIcon: DrizzleIcon,
    highTemp: 20,
    lowTemp: 15
  },
  {
    date: new Date("2025-06-16"),
    weatherIcon: DrizzleIcon,
    highTemp: 18,
    lowTemp: 12
  }
];

  const hourlyForecast = [
    {
      weatherIcon: DrizzleIcon,
      time: new Date("2025-06-15T12:00"),
      temperature: 20,
    },
    {
      weatherIcon: DrizzleIcon,
      time: new Date("2025-07-15T12:00"),
      temperature: 18,
    }
  ]
    

  return (
    
    <>
      <div className="container">
          <Header />
          <SearchBar />
          <MainSection 
            currentWeather={currentWeather}
            dailyForecast={dailyForecast}
            stats={stats}
          />
      </div>
    </>
  )
}

export default App
