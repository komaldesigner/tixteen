import React from 'react';
// import "./pagination.css"
import "../../../styles/brand/InfluencerList/pagination.css"
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <button className="page-link" onClick={() => paginate(currentPage - 1)}>
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number && 'active'}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === pageNumbers.length && 'disabled'}`}>
          <button className="page-link" onClick={() => paginate(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
