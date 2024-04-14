import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import "./style.css";
import getWeather from "./api";



const Mausamfromparams = ({cityName}) => {
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo =async  (cityName) => {
    try {
      const data=await getWeather(cityName);
      console.log(data);
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getWeatherInfo(cityName);
  }, [cityName]);

  return (
    <div style={{marginTop:'40px'}}>
      <Weathercard {...tempInfo} />
    </div>
  );
};

export default Mausamfromparams ;