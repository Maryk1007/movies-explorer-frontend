import React from 'react';
function MoviesCard({ onSaveClick, onDeleteClick, onlySaved, movie}) {
//перевести длительность фильма в часы и минуты
  const toTime = (time) => {
    const hours = Math.trunc(time / 60);
    const minutes = time - (hours * 60)
    return hours + "ч " + minutes + "м";
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    if (!movie.saved) {
      onSaveClick(movie);
    }
  }

  const handleDeleteClick = (event) => {
    event.preventDefault();
    onDeleteClick(movie)
  }

  return (
      <li className="movie" key={movie.id}>
        <a className='movie__trailer' href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
          <img className="movie__pic"
            src={movie.image}
            alt={movie.nameRu}/>
        </a>
        <div className="movie__caption">
          <h2 className="movie__title">{movie.nameRu}</h2>
          <span className="movie__duration">{toTime(movie.duration)}</span>
        </div>
        {
            onlySaved ?
              <button  onClick={handleDeleteClick} className="movie-checkbox__custom movie-checkbox__custom_saved" type="button"></button> :
              <button onClick={handleSaveClick} className={ movie.saved ? "movie-checkbox__custom movie-checkbox__custom_check" : "movie-checkbox__custom" } type="button"></button>
          }
      </li>
  );
}

export default MoviesCard;
