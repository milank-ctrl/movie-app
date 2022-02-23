import './App.css';
import MovieC from './MovieC';
import Pagination from './Pagination';
import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';


function Movie() {

    useEffect(() => {
        fetchMovies();
    }, []);

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [number, setNumber] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [loading, setLoading] = useState(false);

    const fetchMovies = async() => {
        setLoading(true);
        const data = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=27a42a31404495c7097c57669d90dcce&language=en-US&page=${currentPage}`);
        

        const moviesList = await data.json();
        console.log(moviesList);

        setMovies(moviesList.results);
        setTotalPage(moviesList.total_pages);
        setLoading(false);
    }
    // Change page
  //const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = number => setNumber(number + 1);

 
  console.log(currentPage);

  

  return (
    <div className="container">
        <h3>Popular Movies</h3>        
        <MovieC
            movies = {movies}
            loading = {loading}
        />
        <ReactPaginate 
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={totalPage}
            containerClassName={"pagination"}
            previousLinkClassName={"prev-btn"}
            nextLinkClassName={"next-btn"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"pagination-active"}
        />
                          
    </div>
    
  );
}

export default Movie;