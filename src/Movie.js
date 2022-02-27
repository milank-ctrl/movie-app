import './App.css';
import MovieC from './MovieC';
import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
import Filter from './Filter';




function Movie() {
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    
    const json = require('./other/logs.json');
   
    
    useEffect(() => {
        fetchMovies();

        if(activeGenre === 0){
            setFiltered(movies);
            return;
        }

        const filtered = movies.filter((movie) => movie.genre_ids.includes(activeGenre));
        setMovies(filtered);
        
    }, [currentPage, activeGenre]);

    const fetchMovies = async() => {
        setLoading(true);

        const data = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${json.api_key}&language=en-US&page=${currentPage}`);
        
        const moviesList = await data.json();
        
        setMovies(moviesList.results);
        setTotalPage(moviesList.total_pages);
        setLoading(false);
    }
    console.log(filtered)

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const prevPage = pageNumber => setCurrentPage((pageNumber-1 < currentPage) ? 1 : pageNumber-1);
    const nextPage = pageNumber => setCurrentPage((pageNumber+1 > totalPage) ? totalPage: pageNumber+1);

  return (
    <div className="container">
        <h3>Popular Movies</h3>
        <Filter 
            movies = {movies}
            setFiltered = {setFiltered}
            activeGenre = {activeGenre}
            setActiveGenre = {setActiveGenre}
        />        
        <MovieC
            movies = {movies}
            loading = {loading}
        />
        
        <Pagination 
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            loading = {loading}
            totalPage = {totalPage}  
        />
        
                          
    </div>
    
  );
}

export default Movie;