import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Temp from './mausam';
import Navbar from './Navbar';
function Liveweather() {
    const [location,setLocation] = useState({}); 
  

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLocation({ latitude, longitude });
            console.log(location)
          },
          (error) => console.log(error.message)
        );
      }
    }, []);
    return (
      <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
        <Navbar />
        <Temp location={location} />
      </div>
    )
  }

export default Liveweather
