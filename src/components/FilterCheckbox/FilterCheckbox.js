import {useState} from "react";

function FilterCheckbox() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);

  };
  return (
    <form className='filter-checkbox'>
      <input
        className='filter-checkbox__button'
        type='checkbox'
        id='checkbox-button'
        defaultChecked={checked}
        onChange={handleChange}>
      </input>
      <p className='filter-checkbox__label'>Короткометражки</p>
    </form>
  );
}

export default FilterCheckbox;
