import type { CurrentWeather, DailyForecastItem, HourlyForecastItem } from "../types/weatherTypes";
import { mapWeatherCodeToIcon } from "../utils/weatherIcon";

type Unit = "metric" | "imperial";

export async function fetchCurrentWeather(
  latitude: number,
  longitude: number,
  unit: Unit = "metric"
): Promise<{ currentWeather:CurrentWeather; dailyForecast:DailyForecastItem[], hourlyForecast:HourlyForecastItem[] }> {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),           
    current: [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",                  
      "precipitation",
      "wind_speed_10m",
      "weather_code",                      
    ].join(","),
    daily: ["temperature_2m_max", "temperature_2m_min", "weather_code"].join(","),
    hourly: ["temperature_2m", "weather_code"].join(","),
    timezone: "auto",
    temperature_unit: unit === "metric" ? "celsius" : "fahrenheit",
  });

  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }

  const data = await response.json() as unknown as {
    current: {
        time: string;
        temperature_2m: number;
        weather_code: number;
        precipitation: number;
        wind_speed_10m: number;
        apparent_temperature: number;
        relative_humidity_2m: number;
    };
    daily: {
        time: string[]; 
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weather_code: number[];
    }; 
    hourly: {
        time: string[];
        temperature_2m: number[];
        weather_code: number[];
    };
};

  const currentWeather: CurrentWeather = {
    city: "Berlin", // temporary
    country: "Germany",
    date: new Date(data.current.time),
    temperature: data.current.temperature_2m,
    weatherIcon: mapWeatherCodeToIcon(data.current.weather_code),
    precipitation: data.current.precipitation,
    windspeed: data.current.wind_speed_10m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
  };

  const dailyForecast = data.daily.time.map((isoDate, index) => {
  return {
      date: new Date(isoDate),
      highTemp: data.daily.temperature_2m_max[index],
      lowTemp: data.daily.temperature_2m_min[index],
      weatherIcon: mapWeatherCodeToIcon(data.daily.weather_code[index]),
    };
  });

  const hourlyForecast = data.hourly.time.map((isoDate, index) => {
    return {
      time: new Date(isoDate),
      temperature: data.hourly.temperature_2m[index],
      weatherIcon: mapWeatherCodeToIcon(data.hourly.weather_code[index]),
    };
  });

  console.log({currentWeather, dailyForecast, hourlyForecast});

  return {currentWeather, dailyForecast, hourlyForecast};
}
