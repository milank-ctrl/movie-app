import './App.css';
import React from "react";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';


function MovieC({movies, loading}) {
  
  
  if(loading) {
    return <h2>Loading...</h2>    
  }
  const container = {
    hidden: { opacity: 1, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.6
      }
    }
  };
  return (
    <motion.div variants={container}
    initial="hidden"
    animate="visible"  className="movie-container">
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
    </motion.div>
  );
}

export default MovieC;