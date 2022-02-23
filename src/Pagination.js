import React from 'react';

const Pagination = ({paginate, currentPage, prevPage, nextPage }) => {

    const offset = 3;
    const pageNumbers = [];
    let minPageNumer = (currentPage - offset) <= 0 ? 1 : currentPage - offset;
    let maxPageNumber = currentPage + offset
  
    for (let i = minPageNumer; i <= maxPageNumber; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className='pagination-container'>

        <button onClick={() => prevPage(currentPage)}>Previous</button>

        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className={number === currentPage ? "page-item active-page" : "page-item" } onClick={() => paginate(number)}>         
                {number} 
            </li>
          ))}
        </ul>

        <button onClick={() => nextPage(currentPage)}>Next</button>

      </nav>
    );
  };
  
  export default Pagination;