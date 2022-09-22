import { moviesList } from '../../utils/moviesList';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
  return (
      <section className="movies-cardlist">
        <ul className="movies-cardlist__wrap">
        {
          moviesList.map((movie) => (
            <MoviesCard {...movie} key={movie._id}
            />
          ))
        }
        </ul>
      </section>
  );
}

export default MoviesCardList;
