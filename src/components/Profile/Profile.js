import React from 'react';
import { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Profile({profileMessage, onSignOut, handleUpdateUser}) {

  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, setValues, setIsValid } = useFormWithValidation();
  const {name, email} = values;

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if ((name === currentUser.name) && (email === currentUser.email)) {
      setIsValid(false);
    }
  }, [currentUser]);

  const handleSignOut = (event) => {
    event.preventDefault();
    onSignOut();
  }

  const handleSubmit = (evt)=>{
    evt.preventDefault();
    handleUpdateUser(email, name);
  };

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form
        className="form-profile"
        name="profile"
        onSubmit={handleSubmit}
        noValidate>
          <div className="form-profile__wrap">
            <div className="form-profile__container">
              <p className="form-profile__label">Имя</p>
              <input
                className="form-profile__input"
                value={name || ''}
                onChange={handleChange}
                type="text"
                name="name"
                id="name-input"
                maxLength='40'
                minLength='2'
                required />
            </div>
            <span className="form-profile__field-error" id="error-name">{errors.name}</span>
          </div>
          <div className="form-profile__wrap">
            <div className="form-profile__container form-profile__container_type_email">
              <p className="form-profile__label">E-mail</p>
              <input
                className="form-profile__input"
                value={email || ''}
                onChange={handleChange}
                type="email"
                name="email"
                id="email-input"
                required />
            </div>
            <span className="form-profile__field-error" id="error-email">{errors.email}</span>
          </div>
          <p className='form-profile__message'>{profileMessage || ''}</p>
        <button
          className="form__button form__button_type_profile"
          type="submit"
          name="submit"
          disabled={!isValid}>Редактировать</button>
      </form>
      <p className="auth__logouttip">
      <NavLink to="/" className="auth__logout" onClick={handleSignOut}>Выйти из аккаунта</NavLink>
      </p>
    </section>
  )
}

export default Profile;
