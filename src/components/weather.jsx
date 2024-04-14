import React, { useEffect, useState } from 'react'
import Temp from './mausam'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import Mausamfromparams from './masuamfromparams'
const Weather = () => { 
  const {cityname} = useParams();
  console.log(cityname)
  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
      <Navbar />
      <Mausamfromparams cityName={cityname} />
    </div>
  )
}

export default Weather;
