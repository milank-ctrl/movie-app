
import './App.css';
import Movie from './Movie';
import MovieDetail from './MovieDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/movie-app" element={<Movie/>}></Route>
        <Route path="/movie-app/:id" element={<MovieDetail/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
