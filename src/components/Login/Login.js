import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Login({handleLogin}) {
  const [isContentSubmitButton, setContentSubmitButton] = useState('Войти');
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const {email, password} = values;

  const handleSubmit = (evt)=>{
    evt.preventDefault();
    renderLoading(true);
    handleLogin({
      email,
      password,
      onRenderLoading: ()=>{
        renderLoading(false)
      }
    });
  };

  /** Изменение текста кнопки при ожидании ответа от сервера */
  const renderLoading = (isLoading)=>{
    isLoading ? setContentSubmitButton('Вход...') : setContentSubmitButton('Регистрация')
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Рады видеть!</h2>
      <form
        className="form"
        name="login"
        onSubmit={handleSubmit}
        noValidate>
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
              required />
            <span className="form__field-error" id="error-password">{errors.password}</span>
          </div>
        <button
          className="form__button form__button_type_login"
          type="submit"
          name="submit"
          disabled={!isValid}>{isContentSubmitButton}</button>
      </form>
      <p className="auth__logintip">Еще не зарегистрированы?
        <NavLink to="/signup" className="auth__login-link"> Регистрация</NavLink>
      </p>
    </section>
  )
}

export default Login;
