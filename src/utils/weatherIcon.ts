// src/utils/weatherIcon.ts
import OvercastIcon from "../assets/images/icon-overcast.webp";
import PartlyCloudyIcon from "../assets/images/icon-partly-cloudy.webp";
import RainIcon from "../assets/images/icon-rain.webp";
import SnowIcon from "../assets/images/icon-snow.webp";
import SunnyIcon from "../assets/images/icon-sunny.webp";
import StormIcon from "../assets/images/icon-storm.webp";
import FogIcon from "../assets/images/icon-fog.webp";

export function mapWeatherCodeToIcon(weatherCode: number): string {
  // codes follow Open-Meteo / ECMWF convention
  if (weatherCode === 0) {
    return SunnyIcon; // Sunny sky
  }

  if (weatherCode >= 1 && weatherCode <= 3) {
    return PartlyCloudyIcon; // Mainly clear, partly cloudy, overcast
  }

  if (weatherCode >= 45 && weatherCode <= 48) {
    return FogIcon; // Fog
  }

  if (weatherCode >= 51 && weatherCode <= 57) {
    return OvercastIcon; // Overcast
  }

  if (weatherCode >= 61 && weatherCode <= 67) {
    return RainIcon; // Rain (all intensities)
  }

  if (weatherCode >= 71 && weatherCode <= 77) {
    return SnowIcon; // Snow, snow grains
  }

  if (weatherCode >= 80 && weatherCode <= 82) {
    return RainIcon; // Rain showers
  }

  if (weatherCode >= 85 && weatherCode <= 86) {
    return SnowIcon; // Snow showers
  }

  if (weatherCode >= 95) {
    return StormIcon; // Thunderstorms
  }

  // fallback
  return PartlyCloudyIcon;
}
