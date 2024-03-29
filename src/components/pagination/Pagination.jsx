import React, { useEffect, useState } from 'react';
import classes from './Pagination.module.scss';
import { getPagesCount } from '../../utils';

const Pagination = ({ totalCount, limit, currentPage, setPageCallback }) => {
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    setTotalPages(getPagesCount(totalCount, limit));
  }, [totalCount, limit]);

  return (
    <div className={ classes.pages }>
      {
        [...Array(totalPages)].map((_, index) => {
          const page = index + 1;

          return (
            <div
              key={ index }
              className={ `${ classes.page } ${ currentPage === page ? classes.selectedPage : '' }` }
              onClick={ () => setPageCallback(page) }
            >
              { page }
            </div>
          );
        })
      }
    </div>
  );
};

export default Pagination;
