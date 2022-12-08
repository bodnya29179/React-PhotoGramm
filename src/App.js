import { ImagesGrid, Search } from './components';
import { useEffect, useState } from 'react';
import { CATEGORIES, IMAGES } from './constants';
import Filter from './components/filter/Filter';
import classes from './App.module.scss';
import NotFound from './components/not-found/NotFound';

function App() {
  const [displayedImages, setDisplayedImages] = useState([]);

  const [filteredImages, setFilteredImages] = useState(IMAGES);
  const [searchedImages, setSearchedImages] = useState(IMAGES);

  useEffect(() => {
    const displayedImages = filteredImages.filter((filterImage) => {
      return searchedImages.some((searchImage) => searchImage.id === filterImage.id);
    });

    setDisplayedImages(displayedImages);
  }, [filteredImages, searchedImages]);

  const filterImages = (images) => {
    setFilteredImages(images);
  }
  const searchImages = (images) => {
    setSearchedImages(images);
  }
  const imageSelector = (image) => image.categories;

  return (
    <div className={classes.container}>
      <div className={classes.filter}>
        <Filter
          data={IMAGES}
          options={Object.values(CATEGORIES)}
          selectorCallback={imageSelector}
          filterDataCallback={filterImages}
        />
      </div>

      <div className={classes.grid}>
        <Search
          data={IMAGES}
          selectorCallback={imageSelector}
          searchDataCallback={searchImages}
        />

        {
          IMAGES.length && !displayedImages.length
            ? <NotFound text="Images are not found"/>
            : <ImagesGrid images={displayedImages}/>
        }
      </div>
    </div>
  );
}

export default App;
