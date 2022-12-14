import React from 'react';
import { useState, useCallback } from "react";
import { NavLink } from 'react-router-dom';

function Register({onSubmit}) {
  const [isContentSubmitButton] = useState("Зарегистрироваться");
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = data;

  const handleChange = useCallback((evt)=>{
    const { name, value } = evt.target
    setData(prevState=>({...prevState, [name]: value}))
  }, [setData]);

  return (
    <section className="auth">
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form
        className="form"
        name="register"
        onSubmit={onSubmit}
        noValidate>
          <div className="form__container">
            <p className='form__label'>Имя</p>
            <input
              className="form__input"
              minLength={2}
              maxLength={30}
              type="text"
              name="name"
              id="name-input"
              required />
            <span className="form__field-error" id="error-email"></span>
          </div>
          <div className="form__container">
            <p className="form__label">E-mail</p>
            <input
              className="form__input"
              value={email || ''}
              onChange={handleChange}
              type="email"
              name="email"
              id="email-input"
              required />
            <span className="form__field-error" id="error-email"></span>
          </div>
          <div className="form__container">
            <p className="form__label">Пароль</p>
            <input
              className="form__input"
              value={password || ''}
              onChange={handleChange}
              type="password"
              name="password"
              id="password-input"
              required />
            <span className="form__field-error" id="error-email"></span>
          </div>
        <button
          className="form__button form__button_type_register"
          type="submit"
          name="submit">{isContentSubmitButton}</button>
      </form>
      <p className="auth__logintip">Уже зарегистрированы?
        <NavLink to="/signin" className="auth__login-link"> Войти</NavLink>
      </p>
    </section>
  )
}

export default Register;
