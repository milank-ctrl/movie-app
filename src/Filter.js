import React from 'react';
import {useEffect} from 'react';

const Filter = ({setActiveGenre, activeGenre, setFiltered, movies}) => {


    return (
     <div className="filter-container">
         <button onClick={() => setActiveGenre(0)} className='filterBtn'>All</button>
         <button onClick={() => setActiveGenre(35)} className='filterBtn'>Comedy</button>
         <button onClick={() => setActiveGenre(28)} className='filterBtn'>Action</button>
     </div>
    );
  }
  
  export default Filter;