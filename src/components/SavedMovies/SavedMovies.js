import React from 'react';
import {useState, useEffect} from 'react';
import SearchForm from '../SearchForm/SearchFrom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { MOVIES_URL } from '../../utils/config';
import { filterByKeyword, filterByCheckbox, updateMoviesImage } from '../../utils/MoviesToolFilter';


function SavedMovies({moviesArray, onDeleteClick}) {


  const [keyword, setKeyword] = useState('');
  const [checked, setChecked] = useState(false);
  const [renderMovies, setRenderMovies] = useState(moviesArray);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const updatedMovies = updateMoviesImage(moviesArray, MOVIES_URL);
    setRenderMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  }, [moviesArray])

  const onSearch = (word, checkbox) => {
    const keywordFilteredMovies = filterByKeyword(renderMovies, keyword, ['nameRU', 'nameEN']);
    const checkedFilteredMovies = filterByCheckbox(keywordFilteredMovies, checked);
    setKeyword(word);
    setChecked(checkbox);
    setFilteredMovies(checkedFilteredMovies);
  }

  const onOnlyShorts = (checkbox) => {
    const keywordFilteredMovies = filterByKeyword(renderMovies, keyword, ['nameRU', 'nameEN']);
    const checkedFilteredMovies = filterByCheckbox(keywordFilteredMovies, checked);
    setChecked(checkbox);
    setFilteredMovies(checkedFilteredMovies);
  }

  return (
      <section className="movies">
        <SearchForm
          keyword=''
          checked={checked}
          onSearch={onSearch}
          onOnlyShorts={onOnlyShorts}
        />
        <MoviesCardList moviesArray={filteredMovies} onDeleteClick={ onDeleteClick } listHidden={false} isLoading={false} onlySaved={ true }/>
      </section>
  );
}

export default SavedMovies;
