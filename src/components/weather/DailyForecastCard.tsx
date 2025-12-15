type DailyForecastCardProps = {
  date: Date;
  weatherIcon: string;
  highTemp: number;
  lowTemp: number;
};

export default function DailyForecastCard ({ date, weatherIcon, highTemp, lowTemp }: DailyForecastCardProps) {
  const weekday = date.toLocaleDateString("en-GB", { weekday: "short" });  
  return (
    <>
      <div className="daily-forecast-container">
        <div className="text-preset-6">{weekday}</div>
        <div><img className="weather-icon" src={weatherIcon} alt="" /></div>
        <div className="temps text-preset-7">
          <span className="high-temp">{highTemp}°</span>
          <span className="low-temp">{lowTemp}°</span>
        </div>
      </div>
    </>
        
    );
}