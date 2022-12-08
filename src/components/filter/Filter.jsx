import React, { useEffect, useState } from 'react';
import classes from './Filter.module.scss';
import Checkbox from '../checkbox/Checkbox';

const Filter = ({ options, data, selectorCallback, filterDataCallback }) => {
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    const opts = options.map((option) => ({ name: option, isChecked: true, }));

    setFilterOptions(opts);
  }, []);

  useEffect(() => {
    const selectedOptions = filterOptions
      .filter(({ isChecked }) => isChecked)
      .map(({ name }) => name);

    const filteredData = data.filter((entry) => {
      const entryValue = selectorCallback(entry);
      const shouldBeDisplayed = entryValue.some((val) => selectedOptions.includes(val));

      return shouldBeDisplayed;
    });

    filterDataCallback(filteredData);
  }, [filterOptions]);

  const toggleOption = (optionName, isChecked) => {
    const opts = filterOptions.map((option) => {
      if (option.name === optionName) {
        return { ...option, isChecked };
      }

      return option;
    });

    setFilterOptions(opts);
  };

  return (
    <div className={classes.container}>
      {
        filterOptions.map(({ name }, index) => {
          return (
            <Checkbox
              key={index}
              label={name}
              isCheckedByDefault={true}
              onChangeCallback={(isChecked) => toggleOption(name, isChecked)}
            />
          );
        })
      }
    </div>
  );
};

export default Filter;
