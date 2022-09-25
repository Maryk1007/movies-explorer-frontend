import React from 'react';
function MoviesCard({ onSaveClick, onlySaved, location, ...movie}) {
//перевести длительность фильма в часы и минуты
  const toTime = (time) => {
    const hours = Math.trunc(time / 60);
    const minutes = time - (hours * 60)
    return hours + "ч " + minutes + "м";
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    onSaveClick(movie)
  }

  return (
      <li className="movie" key={movie._id}>
        <img className="movie__pic"
          src={movie.image}
          alt={movie.nameRu}/>
        <div className="movie__caption">
          <h2 className="movie__title">{movie.nameRu}</h2>
          <span className="movie__duration">{toTime(movie.duration)}</span>
        </div>
        {
            onlySaved ?
              <button className="movie-checkbox__custom movie-checkbox__custom_saved"></button> :
              <button onClick={handleSaveClick} className={ movie.saved ? "movie-checkbox__custom movie-checkbox__custom_check" : "movie-checkbox__custom" }></button>
          }
      </li>
  );
}

export default MoviesCard;
