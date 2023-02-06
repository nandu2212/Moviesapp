import React from "react";
import './header.css';

import { Link } from 'react-router-dom'

const Header = ()=>{
return(
    <>
    <div className="header">
        <div className='headerLeft'>
            <Link to='/'><img className="header-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="Imdb"/></Link>
            <Link to='/movies/popular' style={{textDecoration: "none" ,color:'black'}}><span style={{color:'black'}}>Popular</span></Link>
            <Link to='/movies/top-rated' style={{textDecoration: "none"}}><span style={{color:'black'}}>Top Rated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration: "none"}}><span style={{color:'black'}}>Upcoming</span></Link>
        </div>
    </div>
    </>
)
}
export default Header;