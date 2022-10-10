import React from 'react';
import {useState, useEffect} from 'react';
import SearchForm from '../SearchForm/SearchFrom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { filterByKeyword, filterByCheckbox } from '../../utils/MoviesToolFilter';
import { DESKTOP_WIDTH, TABLET_WIDTH, RENDER_WIDTH } from '../../utils/constants';


function Movies({ onSearch, onSaveClick, listError, listHidden, isLoading, keyword, checked, setChecked, moviesArray}) {
  const getRenderWidth = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= DESKTOP_WIDTH) {
      return RENDER_WIDTH['desktop'];
    } else if (windowWidth >= TABLET_WIDTH) {
      return RENDER_WIDTH['tablet'];
    }
    return RENDER_WIDTH['default'];
  }

  const [renderWidth, setRenderWidth] = useState(getRenderWidth())
  const [filteredMovies, setFilteredMovies] = useState(moviesArray);
  const [renderFilms, setRenderFilms] = useState([]);
  const [havenext, setHavenext] = useState(moviesArray.length > renderWidth.firstRenderSize);
  const [moreCounter, setMoreCounter] = useState(0);

  const onMoreClick = () => {
    setMoreCounter(moreCounter + 1);
  }

  const onWindowResize = () => {
    setRenderWidth(getRenderWidth())
  }

  useEffect(() => {
    const filteredByKeyword = filterByKeyword(moviesArray, keyword, ['nameRU', 'nameEN']);
    const filteredByCheckbox = filterByCheckbox(filteredByKeyword, checked);
    setFilteredMovies(filteredByCheckbox);
  }, [moviesArray, keyword, checked])

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)

    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  useEffect(() => {
    setMoreCounter(0);
  }, [keyword, checked]);

  useEffect(() => {
    setRenderFilms(filteredMovies.slice(0, renderWidth.firstRenderSize + renderWidth.nextRenderSize * moreCounter))
  }, [filteredMovies, moreCounter, renderWidth])

  useEffect(() => {
    if (renderFilms.length === filteredMovies.length) {
      setHavenext(false);
    } else {
      setHavenext(true);
    }
  }, [filteredMovies, renderFilms])

  return (
      <section className="movies">
        <SearchForm
          onSearch={onSearch}
          keyword={keyword}
          checked={checked}
          setChecked={setChecked}
        />
         <Preloader isLoading={isLoading} />
        <MoviesCardList
          listError={listError}
          listHidden={listHidden}
          isLoading={isLoading}
          moviesArray={ moviesArray }
          onSaveClick={ onSaveClick }
          onlySaved={ false }/>
        <button className={`${moviesArray.length === 0 ? "movies__button_hidden" : "movies__button"}`}  havenext="false" onClick={onMoreClick} type="button">Ещё</button>
      </section>
  );
}

export default Movies;
