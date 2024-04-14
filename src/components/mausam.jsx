import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import "./style.css";




const Temp = ({location}) => {
  const {latitude,longitude} = location;
  console.log(latitude,longitude);
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ed787fa48278171b96976cb8b2c1bd03`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data)


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
    if(location){
      getWeatherInfo();
    }
    }, [location]);

  return (
    <div style={{marginTop:'40px'}}>
      <Weathercard {...tempInfo} />
    </div>
  );
};

export default Temp ;