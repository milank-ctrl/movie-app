import './App.css';
import React from "react";
import { Link } from 'react-router-dom';


function MovieC({movies, loading}) {
  
  
  if(loading) {
    return <h2>Loading...</h2>    
  }

  return (
    <div className="movie-container">
      {movies.map(movie => (
        <div key={movie.id} className='movie-card'>
          <Link className="link-movie" to={`/movie-app/${movie.id}`}>
            <img className='img-poster' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}  alt={movie.title}></img>
              <div className="description">
                <h1 className='title'> {movie.title} </h1>      
              </div>   
          </Link>
        </div>
          )
        )
      }
    </div>
  );
}

export default MovieC;