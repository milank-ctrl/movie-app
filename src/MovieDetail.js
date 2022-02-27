import './App.css';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetail() {

    const location = useLocation();
    const movie_id = location.pathname.split('/')[1];
    const json = require('./other/logs.json');
    
    useEffect(() => {
        fetchMovie();
        console.log(movie_id);
    }, []);

    const [movie, setMovie] = useState({});
    const fetchMovie = async() => {
        const data = await fetch (
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${json.api_key}&language=en-US`
        );

        const movieList = await data.json();
        
        
        setMovie(movieList);
    }

  return (
    <div className="movie-detail-container">
        <img className='img-poster' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}  alt={movie.title}></img>
        <div className="movie-details">
            <h1 className="title">{movie.title}</h1>
            <p className="overview">{movie.overview}</p>
            <p className="vote">{movie.vote_average}/10</p>
        </div>
        
    </div>
  );
}

export default MovieDetail;