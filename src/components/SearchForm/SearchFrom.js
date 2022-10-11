import React from 'react';
import { useState, useEffect, useCallback} from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onSearch, keyword, checked, setChecked}) {

  const [isValid, setIsValid] = useState(false);
  const [isWord, setIsWord] = useState(keyword);


  const handleChange = useCallback((evt)=>{
    const { value } = evt.target
    setIsWord(value)
  }, [setIsWord])

  // useEffect(() => {
  //   setIsValid(isWord.length > 0);
  // }, [setIsValid])

  // const handleWordChange = (event) => {
  //   setIsWord(event.target.value)
  // }

  const handleSearchClick = (event) => {
    event.preventDefault();
    setIsValid(true)
    onSearch(isWord, checked);
  }

  return (
    <div className="search">
       <form
          className="search__form"
          onSubmit={handleSearchClick}>
          <input
            className="search__input"
            onChange={handleChange}
            id="search-input"
            type="search"
            placeholder="Фильм"
            required
            value={isWord || ''}
          />
          <button className="search__form-button" disabled={!isValid} type="submit"></button>
        </form>
        <FilterCheckbox
          checked={checked}
          setChecked={setChecked}/>
    </div>
  );
}

export default SearchForm;
