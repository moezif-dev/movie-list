import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Pagination = ( {activePage, pages, term, type} ) => {
  // create a new page elements array 
  const $pages = new Array(pages).fill(1);

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        { $pages.map( (value, index) => {
          const page = index + 1;
          const aria = `Page ${page}`;
          const url = `/page/${page}?term=${term}&type=${type}`;
          
          return (
            <li key={url} className={`${page === activePage ? 'current' : ''}`}>
              {
                page === activePage ? 
                <Fragment><span className="show-for-sr">You're on page</span>{page}</Fragment>: 
                <Link to={url} aria-label={aria}>{page}</Link>
              }
            </li>
          )})
        }
      </ul>
    </nav>
  );
};

export default Pagination;