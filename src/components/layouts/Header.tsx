import WeatherAppLogo from "../../assets/images/logo.svg";
import UnitsToggle from "../weather/UnitsToggle";

export default function Header (){
   
  return (
      <>
        <header>
            <div className="header-section">
                <img src={WeatherAppLogo} alt="Weather App Logo" />
                <UnitsToggle />
            </div>
            <div className="header-title-section text-preset-7">
                <h1>How's the sky looking today?</h1>
            </div>
        </header>
      </>
    );
}