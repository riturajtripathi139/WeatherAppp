import React from 'react'
import './Navbar.css'
import { Link, } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
      <div className= "navigation" style={{backgroundColor:'black',width:'100%', left:'0'}}>
    <div className="nav-links" id="nav-links" style={{ display: 'flex', justifyContent: 'start', padding: '0.5rem', marginLeft:'0.5rem',}} >
                <ul className="flex"style={{ display: 'flex',listStyle: 'none', }} >
                    <Link to={'/'}><a class="hover-link" >Home</a></Link>
                    <Link to={'/Favourite'}><a class="hover-link">Favourite</a></Link>
                    <Link to={'/liveweather'}><a class="hover-link">Weather</a></Link>
                </ul>
            </div>
     </div>
    </>

  )
}

export default Navbar
