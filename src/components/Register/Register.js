import React from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Register({ handleRegister }) {
  const [isContentSubmitButton, setContentSubmitButton] = useState('Зарегистрироваться');
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const {email, password, name} = values;

  const handleSubmit = (evt)=>{
    evt.preventDefault();
    renderLoading(true);
    handleRegister({
      email,
      password,
      name,
      onRenderLoading: ()=>{
        renderLoading(false)
      }
    });
  };

  /** Изменение текста кнопки при ожидании ответа от сервера */
  const renderLoading = (isLoading)=>{
    isLoading ? setContentSubmitButton('Регистрация...') : setContentSubmitButton('Зарегистрироваться')
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form
        className="form"
        name="register"
        onSubmit={handleSubmit}
        noValidate>
          <div className="form__container">
            <p className='form__label'>Имя</p>
            <input
              className="form__input"
              onChange={handleChange}
              value={values.name || ''}
              type='text'
              name='name'
              id="name-input"
              maxLength='40'
              minLength='2'
              placeholder='Имя'
              required />
            <span className="form__field-error" id="error-email">{errors.name}</span>
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
              maxLength='40'
              minLength='2'
              placeholder='Email'
              required />
            <span className="form__field-error" id="error-email">{errors.email}</span>
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
              minLength='2'
              placeholder='Пароль'
              required />
            <span className="form__field-error" id="error-email">{errors.password}</span>
          </div>
        <button
          className="form__button form__button_type_register"
          type="submit"
          name="submit"
          disabled={!isValid}>{isContentSubmitButton}</button>
      </form>
      <p className="auth__logintip">Уже зарегистрированы?
        <NavLink to="/signin" className="auth__login-link"> Войти</NavLink>
      </p>
    </section>
  )
}

export default Register;
