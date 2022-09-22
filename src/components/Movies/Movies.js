import SearchForm from "../SearchForm/SearchFrom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({location, onSubmit}) {
  return (
      <section className="movies">
        <SearchForm
          location={location}
          onSubmit={onSubmit}
        />
        <MoviesCardList/>
        <button className="movies__button" type="button">Ещё</button>
      </section>
  );
}

export default Movies;
