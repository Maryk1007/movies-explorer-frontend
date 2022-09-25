// import {useState} from "react";
// import { Routes, Route } from "react-router-dom";

function MoviesCard({ onSaveClick, onlySaved, location, ...movie}) {
/** перевести минуты в часы и минуты */
  const toTime = (time) => {
    const hours = Math.trunc(time / 60);
    const minutes = time - (hours * 60)
    return hours + "ч " + minutes + "м";
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    onSaveClick(movie)
  }

  // const [checked, setChecked] = useState(false);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  return (
      <li className="movie">
        <img className="movie__pic"
          src={movie.image}
          alt={movie.nameRu}/>
        <div className="movie__caption">
          <h2 className="movie__title">{movie.nameRu}</h2>
          <span className="movie__duration">{toTime(movie.duration)}</span>
        </div>
        {
            onlySaved ?
              <button className='movie-checkbox__custom movie-checkbox__custom_saved'></button> :
              <button onClick={handleSaveClick} className={ movie.saved ? 'movie-checkbox__custom movie-checkbox__custom_check' : 'movie-checkbox__custom' }></button>
          }
        {/* <Routes>
            <Route path="*" element={
              <label className="movie-checkbox">
                <input
                  className="movie-checkbox__default"
                  type='checkbox'
                  id='movie-checkbox'
                  defaultChecked={checked}
                  onChange={handleChange}/>
                  <span className="movie-checkbox__custom"></span>
              </label>}>
            </Route>
            <Route path="/saved-movies" element={
              <label className="movie-checkbox">
                <input
                  className="movie-checkbox__default"
                  type='checkbox'
                  id='movie-checkbox'
                  defaultChecked={!checked}
                  onChange={handleChange}/>
                  <span className="movie-checkbox__custom_saved"></span>
              </label>}>
            </Route>
          </Routes> */}
      </li>
  );
}

export default MoviesCard;
