import { useEffect, useRef, useState } from "react";
import "./Weather.css";
import icon_search from "../assets/search.png";
import icon_clear from "../assets/clear.png";
import icon_drizzle from "../assets/drizzle.png";
import icon_humidity from "../assets/humidity.png";
import icon_rain from "../assets/rain.png";
import icon_snow from "../assets/snow.png";
import icon_wind from "../assets/wind.png";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": icon_clear,
    "01n": icon_clear,
    "02d": icon_clear,
    "02n": icon_clear,
    "03d": icon_clear,
    "03n": icon_clear,
    "04d": icon_drizzle,
    "04n": icon_drizzle,
    "09d": icon_rain,
    "09n": icon_rain,
    "10d": icon_rain,
    "10n": icon_rain,
    "13d": icon_snow,
    "13n": icon_snow,
  };

  const search = async (city) => {
    if (city === "") return alert("Please input name of City !!!");

    try {
      const apiKey = import.meta.env.VITE_APP_ID;
      //   console.log("Using API Key:", apiKey); // Log API Key for verification

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      // console.log("Request URL:", url); // Log the request URL

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) return alert(data.message);

      const icon = allIcons[data.weather[0].icon] || icon_clear;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error to fetching API weather data");
    }
  };

  useEffect(() => {
    search("Medan");
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          name=""
          id=""
          placeholder="Input name of the city"
        />
        <img
          src={icon_search}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="" className="weather-icon" />
          <p className="temp">{weatherData.temperature}°c</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={icon_humidity} alt="" />
              <div>
                <p>{weatherData.humidity} % </p>
                <span>Humadity</span>
              </div>
            </div>
            <div className="col">
              <img src={icon_wind} alt="" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
