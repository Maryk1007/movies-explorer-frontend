import React from 'react';

function FilterCheckbox({ checked, setChecked }) {

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <form className="filter-checkbox">
      <input
        className="filter-checkbox__button"
        type="checkbox"
        id="checkbox-button"
        defaultChecked={checked}
        onChange={handleChange}
        value={`${checked}`}>
      </input>
      <p className="filter-checkbox__label">Короткометражки</p>
    </form>
  );
}

export default FilterCheckbox;
