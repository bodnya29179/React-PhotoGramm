import React, { Fragment, useEffect, useState } from 'react';
import { leaveOneSpace } from '../../utils';

const Search = ({ data, selectorCallback, searchDataCallback }) => {
  const [searchValue, setSearchValue] = useState('');

  const changeSearch = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    if (searchValue) {
      const searchedData = data.filter((entry) => {
        const entryValue = selectorCallback(entry);

        const shouldBeDisplayed = entryValue.some((val) => {
          const searchQuery = leaveOneSpace(searchValue).toLowerCase();

          return val.toLowerCase().includes(searchQuery);
        });

        return shouldBeDisplayed;
      });

      searchDataCallback(searchedData);
    } else {
      searchDataCallback(data);
    }
  }, [searchValue]);

  return (
    <Fragment>
      <input type="text" value={searchValue} onChange={changeSearch}/>
    </Fragment>
  );
};

export default Search;
