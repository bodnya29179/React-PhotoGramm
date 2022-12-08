import { ImagesGrid, Search } from './components';
import { Fragment, useEffect, useState } from 'react';
import { CATEGORIES, IMAGES } from './constants';
import Filter from './components/filter/Filter';
import classes from './App.module.scss';
import NotFound from './components/not-found/NotFound';
import Pagination from './components/pagination/Pagination';

const LIMIT_IMAGES_PER_PAGE = 10;

function App() {
  const [displayedImages, setDisplayedImages] = useState([]);

  const [filteredImages, setFilteredImages] = useState(IMAGES);
  const [searchedImages, setSearchedImages] = useState(IMAGES);
  const [page, setPage] = useState(1);

  const filterImages = (images) => setFilteredImages(images);
  const searchImages = (images) => setSearchedImages(images);
  const imageSelector = (image) => image.categories;
  const changeCurrentPage = (selectedPage) => setPage(selectedPage);

  useEffect(() => {
    const allDisplayedImages = filteredImages.filter((filterImage) => {
      return searchedImages.some((searchImage) => searchImage.id === filterImage.id);
    });

    const displayedImagesOnPage = allDisplayedImages.slice((page - 1) * LIMIT_IMAGES_PER_PAGE, page * LIMIT_IMAGES_PER_PAGE);

    setDisplayedImages(displayedImagesOnPage);
  }, [filteredImages, searchedImages, page]);

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
            : (
              <Fragment>
                <div className={classes.content}>
                  <ImagesGrid images={displayedImages}/>
                </div>

                <Pagination
                  totalCount={IMAGES.length}
                  limit={LIMIT_IMAGES_PER_PAGE}
                  currentPage={page}
                  setPageCallback={changeCurrentPage}
                />
              </Fragment>
            )
        }
      </div>
    </div>
  );
}

export default App;
