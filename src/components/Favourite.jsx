import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Chotaweather from './chotaweather'
import { useNavigate } from 'react-router-dom'
import { Loader } from 'react-feather'

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    console.log(JSON.parse(lists));
      return JSON.parse(lists)
  } else{
      return []
  }
}

const Favourite = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(getLocalData());
  
 
  return (
    <>
    <Navbar/>
    <h1 style={{marginTop:'10px'}}>Your Saved Items </h1>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
      {items ? items.map((item) => (
        <div  key={item.id}>
            <Chotaweather item={item} setItems={setItems} />
        </div>
        )): <Loader/>}
    </div>
  </>
  )
}

export default Favourite
