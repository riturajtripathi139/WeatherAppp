import './chotaweather.css';
import {Search, MapPin, Wind} from 'react-feather';
import getWeather from './api';
import { useEffect, useState } from 'react';
import dateFormat from 'dateformat';

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    console.log(JSON.parse(lists));
      return JSON.parse(lists)
  } else{
      return []
  }
}
const Chotaweather = ({item,setItems}) => {
  const{name,id} = item; 
  const [weather,setWeather] = useState({});
  const [data,setData] = useState(getLocalData());
  useEffect(() => {
    const weatherfetching =async () =>{
        const weatherData = await getWeather(name);
        setWeather(weatherData);
    }
    weatherfetching();
  }, [])

  useEffect(()=>{
    localStorage.setItem('mytodolist',JSON.stringify(data));
    setItems(data);
  },[data])

//   const getWeatherbyCity = async () => {
    
//     setWeather(weatherData);
//     setCity(""); 
//   }
  const handleUnsave = (e)=>{
      const updatedItem = data.filter((curElem) =>{return curElem.id !== id })
      setData(updatedItem);
      // setItems(updatedItem);
  };
  
  const renderDate = () => {
    let now = new Date();
    return dateFormat(now, "dddd, mmmm dS, h:MM TT");
  }

  return (
    <div className="app">
       <button style={{cursor:'pointer'}}  onClick={e=> handleUnsave(e)}> <i className="fa-solid fa-bookmark" ></i> </button> 

      {weather && weather.weather && 
        <div className="content">
        
        <div className="location d-flex">
          <MapPin></MapPin>
          <h2>{weather.name} </h2>
        </div>
        <p className="datetext">{renderDate()}</p>

        <div className="weatherdesc d-flex flex-c">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          <h3>{weather.weather[0].description}</h3>
        </div>

        <div className="tempstats d-flex flex-c">
          <h1>{weather.main.temp} <span>&deg;C</span></h1>
          <h3>Feels Like {weather.main.feels_like} <span>&deg;C</span></h3>
        </div>

        <div className="windstats d-flex">
          <Wind></Wind>
          <h3>Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;</h3>
        </div>

         </div>
      }

      {!weather.weather && <div className="content">
        {/* <h4>No Data found !</h4> */}
      </div>}

      {/* <p>{JSON.stringify(weather)}</p> */}

    </div>
  );
}

export default Chotaweather;
