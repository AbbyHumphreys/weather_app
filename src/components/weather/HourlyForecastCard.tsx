type HourlyForecastItemProps = {
  time: Date;
  weatherIcon: string;
  temperature: number;
};

export default function HourlyForecastItem ({ time, weatherIcon, temperature }: HourlyForecastItemProps) {
  const timeLabel = time.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
}); 
  return (
        <>
            <div className="hourly-forecast-card">
              <div className="left text-preset-6">
                <img className="weather-icon" src={weatherIcon} alt="Weather icon" />{timeLabel}
              </div>
              <div className="right text-preset-7">
                {temperature}&deg;
              </div>
            </div>
        </>
        
    );
}