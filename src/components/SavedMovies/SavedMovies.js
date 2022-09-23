import SearchForm from "../SearchForm/SearchFrom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({location, onSubmit}) {
  return (
      <section className="movies">
        <SearchForm
          location={location}
          onSubmit={onSubmit}
        />
        <MoviesCardList/>
      </section>
  );
}

export default SavedMovies;
