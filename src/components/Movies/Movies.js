import SearchForm from "../SearchForm/SearchFrom";

function Movies({location, onSubmit}) {
  return (
      <section className="movies">
        <SearchForm
          location={location}
          onSubmit={onSubmit}
        />
        {/* <MoviesCardList/>
        <button
          type="button"
          className="movies__button button">Ещё
        </button> */}
      </section>
  );
}

export default Movies;
