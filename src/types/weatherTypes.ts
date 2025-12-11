// Component list

    // Search Form (stateful, no-repeat)
    // Current Weather (presentational, no-repeat)
    // Stats ( presentational, repeatable)
    // Daily Forecast ( presentational, repeatable)
    // Hourly Forecast ( presentational, repeatable)
    // Units (stateful, no-repeat)

// State list

    // 

// A rough WeatherData interface

// Props
    // SearchForm: query, onQueryChange, onSubmit
    // CurrentWeatherCard:  city, country, date, temperature, weatherIcon
    // StatCard: statCardTitle, statCardValue
    // DailyForecastItem: day, weatherIcon, highTemp, lowTemp
    // Day: label, isSelected: boolean, onSelect: () => void
    // HourlyForecastItem: weatherIcon, time, temperature
    // UnitsToggle, unit, onUnitChange

// Containers / stateful owner (even if you haven’t written them yet):
    // App
    // DailyForecastSection
    // HourlyForecastSection

// Pure presentational pieces with the props you listed:
    // CurrentWeatherCard
    // StatCard
    // DailyForecastItem
    // HourlyForecastItem
    // Day
    // UnitsToggle
    // WeatherIcon

// App
    // query
    // unit
    // isLoading
    // error
    // currentWeather
    // dailyForecast
    // selectedDay
    // hourlyForecast

export interface CurrentWeather {
    city: string;
    country: string;
    date: Date;
    temperature: number;
    weatherIcon: string;
    precipitation: number;
    windspeed: number;
    feelsLike: number;
    humidity: number;
}

export interface Stats {
    feelsLike: number;
    humidity: number;
    windspeed: number;
    precipitation: number;
}

export interface DailyForecastItem {
    date: Date;
    weatherIcon: string;
    highTemp: number;
    lowTemp: number;
}

export interface HourlyForecastItem {
    weatherIcon: string;
    time: Date;
    temperature: number;
}





