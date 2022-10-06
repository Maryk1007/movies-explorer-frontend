import React from 'react';
import {useState} from 'react';
import SearchForm from '../SearchForm/SearchFrom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesList } from '../../utils/moviesList';

function Movies({location, onSubmit, checked, setChecked}) {

  const [moviesArray, setMoviesArray] = useState(moviesList);
  const onSaveClick = (movie) => {
    const newArray = []
    moviesList.forEach((item) => {
      if (movie._id === item._id) {
        item.saved = !item.saved
      }
      newArray.push(item);
    })
    setMoviesArray(newArray);
  }

  return (
      <section className="movies">
        <SearchForm
          location={location}
          onSubmit={onSubmit}
          checked={checked}
          setChecked={setChecked}
        />
        <MoviesCardList moviesArray={ moviesArray } onSaveClick={ onSaveClick } onlySaved={ false }/>
        <button className="movies__button" type="button">Ещё</button>
      </section>
  );
}

export default Movies;
