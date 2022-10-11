import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ onSaveClick, onDeleteClick, onlySaved, moviesArray, isLoading, listHidden, listError }) {

  const listEmpty = moviesArray.length === 0;

  return (
      <section className="movies-cardlist">
        {
          listHidden ? "" :
          <div className={ isLoading ? "movies-cardlist__hidden" : "" }>
            { listError ? <p>{listError}</p> :
              listEmpty ? <p className="movies-cardlist__message">Ничего не найдено</p> :
              <ul className={ isLoading ? "movies-cardlist__hidden" : "movies-cardlist__wrap"}>
          {
            moviesArray.map((movie) => (
              <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              onSaveClick={onSaveClick}
              onDeleteClick={onDeleteClick}
              onlySaved={onlySaved}
              />
            ))
          }
        </ul>
            }
          </div>
        }
      </section>
  );
}

export default MoviesCardList;
