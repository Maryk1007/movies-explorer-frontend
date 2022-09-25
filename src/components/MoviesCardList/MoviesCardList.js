import { moviesList } from '../../utils/moviesList';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ onSaveClick, onlySaved }) {
  return (
      <section className="movies-cardlist">
        <ul className="movies-cardlist__wrap">
        {
          moviesList.map((movie) => (
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
