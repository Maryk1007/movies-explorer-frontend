import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ onSaveClick, onlySaved, moviesArray }) {
  return (
      <section className="movies-cardlist">
        <ul className="movies-cardlist__wrap">
        {
          moviesArray.map((movie) => (
            <MoviesCard
              {...movie}
              key={movie._id}
              onSaveClick={onSaveClick}
              onlySaved={onlySaved}
            />
          ))
        }
        </ul>
      </section>
  );
}

export default MoviesCardList;
