import './App.css';
import MovieC from './MovieC';
import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';


function Movie() {
    const [currentPage, setCurrentPage] = useState(1);
    

    useEffect(() => {
        fetchMovies();
        
    }, [currentPage]);

    const [movies, setMovies] = useState([]);
    
    //const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async() => {
        setLoading(true);

        const data = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=27a42a31404495c7097c57669d90dcce&language=en-US&page=${currentPage}`);
        
        const moviesList = await data.json();
       
        setMovies(moviesList.results);
        //setTotalPage(moviesList.total_pages);
        setLoading(false);
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const prevPage = pageNumber => setCurrentPage((pageNumber-1< currentPage) ? 1 : pageNumber-1);
    const nextPage = pageNumber => setCurrentPage(pageNumber+1);

  return (
    <div className="container">
        <h3>Popular Movies</h3>        
        <MovieC
            movies = {movies}
            loading = {loading}
        />
        <Pagination 
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
        
        />
        
                          
    </div>
    
  );
}

export default Movie;