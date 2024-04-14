import React from 'react'
import Favourite from './components/Favourite'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Weather from './components/weather'
import Chotaweather from './components/chotaweather'
import Liveweather from './components/liveweather'






const Appp = () => {


  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Favourite' element={<Favourite />} />
      <Route path='/weather/:cityname' element={<Weather />} />
      <Route path='/liveweather' element={<Liveweather />} />
      <Route path='/Navbar' element={<Navbar />} />
      <Route path='/Chotaweather' element={<Chotaweather />} />
    

    </Routes>
   </Router>
   </>
  )
}

export default Appp;