import { ImagesGrid } from './components';
import { useEffect, useState } from 'react';
import { CATEGORIES, IMAGES } from './constants';
import Filter from './components/filter/Filter';
import classes from './App.module.scss';

function App() {
  const [displayedImages, setDisplayedImages] = useState([]);

  const [filteredImages, setFilteredImages] = useState(IMAGES);
  const [searchedImages, setSearchedImages] = useState(IMAGES);

  useEffect(() => {
    // console.log(filteredImages, searchedImages);
    const displayedImages = filteredImages.filter((filterImage) => {
      return searchedImages.some((searchImage) => searchImage.id === filterImage.id);
    });

    setDisplayedImages(displayedImages);
  }, [filteredImages, searchedImages]);

  const filterImages = (images) => {
    console.log('filter', images);
    setFilteredImages(images);
  }
  const imageSelector = (image) => image.categories;

  return (
    <div className={classes.container}>
      <Filter
        data={IMAGES}
        options={Object.values(CATEGORIES)}
        filterDataCallback={filterImages}
        selectorCallback={imageSelector}
      />

      <ImagesGrid images={displayedImages}/>
    </div>
  );
}

export default App;
