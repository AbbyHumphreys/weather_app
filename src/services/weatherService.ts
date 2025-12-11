import type { CurrentWeather } from "../types/weatherTypes";
import { mapWeatherCodeToIcon } from "../utils/weatherIcon";

type Unit = "metric" | "imperial";

export async function fetchCurrentWeather(
  latitude: number,
  longitude: number,
  unit: Unit = "metric"
): Promise<CurrentWeather> {
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
      "relative_humidity_2m",
      "apparent_temperature"                         
    ].join(","),
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
};

console.log("Fetched current weather data:", data);

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

  return currentWeather;
}
