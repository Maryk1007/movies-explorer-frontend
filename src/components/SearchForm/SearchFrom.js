import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({location, onSubmit}) {
  return (
    <div className="search">
       <form
          className="search__form"
          onSubmit={onSubmit}>
          <input
            className="search__input"
            id="search-input"
            type="search"
            placeholder="Фильм"
            required
          />
          <button className="search__form-button" type="submit" location={location}></button>
        </form>
        <FilterCheckbox/>
    </div>
  );
}

export default SearchForm;
