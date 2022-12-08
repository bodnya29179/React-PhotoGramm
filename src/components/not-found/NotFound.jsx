import React from 'react';
import classes from './NotFound.module.scss';

const NotFound = ({ text }) => {
  return (
    <div className={classes.container}>
      <span>{text}</span>
    </div>
  );
};

export default NotFound;
