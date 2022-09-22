import { Routes, Route } from "react-router-dom";

function MoviesCard({location, ...movie}) {
/** перевести минуты в часы и минуты */
  const toTime = (time) => {
    const hours = Math.trunc(time / 60);
    const minutes = time - (hours * 60)
    return hours + "ч " + minutes + "м";
  };

  return (
      <li className="movie">
        <img className="movie__pic"
          src={movie.image}
          alt={movie.nameRu}/>
        <div className="movie__caption">
          <h2 className="movie__title">{movie.nameRu}</h2>
          <span className="movie__duration">{toTime(movie.duration)}</span>
        </div>
        <Routes>
            <Route path="" element={
              <button
                type="button"
                aria-label="Сохранить фильм"
                className="movie__checkbox movie__checkbox_default movie__checkbox_checked">
              </button>}>
            </Route>
            <Route path="" element={
              <button
                type="button"
                aria-label="Удалить фильм из сохраненных"
                className="movie__checkbox movie__checkbox_delete">
              </button>}>
            </Route>
          </Routes>
      </li>
  );
}

export default MoviesCard;
