import React from 'react';
import classes from './ImagesGrid.module.scss';

const ImagesGrid = ({ images }) => {
  return (
    <div className={classes.grid}>
      {
        images.map((image) => {
          return (
            <div key={image.id} className={classes.imageContainer}>
              <img className={classes.image} src={image.url} alt=""/>
            </div>
          );
        })
      }
    </div>
  );
};

export default ImagesGrid;
