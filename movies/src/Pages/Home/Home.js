import React from "react";
import { useEffect,useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import { Link } from "react-router-dom";


const Home =()=>{
    const [popularMovies,setPopularMovies]=useState([]);
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    })
    return (
        <>
 <Carousel showThumbs={false} autoPlay={true} transitionTime={10} infiniteLoop={true} showStatus={false}>
    {
        popularMovies.map(movies=>(
            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movies.id}`} >
            <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movies && movies.backdrop_path}`} alt='bgimg'/>
            </div>
            <div className="posterImage__overlay">
            <div className="posterImage__title">{movies ? movies.original_title: ""}</div>
            <div className="posterImage__runtime">
                {movies ? movies.release_date : ""}
                <span className="posterImage__rating">
                    {movies ? movies.vote_average :""}
                    <i className="fas fa-star" />{" "}
                </span>
            </div>
            <div className="posterImage__description">{movies ? movies.overview : ""}</div>
        </div>
        </Link>
        ))
    }
 </Carousel>
        </>
    )
}

export default Home;