import { NavLink } from 'react-router-dom';

function Profile() {
  // const inputRef = useRef(true);

  const handleSubmit = (evt)=>{
    evt.preventDefault();
    // renderLoading(true);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Мария!</h2>
      <form
        className="form-profile"
        name="profile"
        onSubmit={handleSubmit}
        noValidate>
          <div className="form-profile__wrap">
            <div className="form-profile__container">
              <p className='form-profile__label'>Имя</p>
              <input
                className="form-profile__input"
                type="email"
                name="email"
                id="email-input"
                required />
            </div>
            <span className='form-profile__field-error' id="error-name"></span>
          </div>
          <div className="form-profile__wrap">
            <div className="form-profile__container form-profile__container_type_email">
              <p className='form-profile__label'>E-mail</p>
              <input
                className="form-profile__input"
                type="password"
                name="password"
                id="password-input"
                required />
            </div>
            <span className='form-profile__field-error' id="error-email"></span>
          </div>
        <button
          className="form__button form__button_type_profile"
          type="submit"
          name="submit">Редактировать</button>
      </form>
      <p className='auth__logintip'>
      <NavLink to="/" className="auth__logout">Выйти из аккаунта</NavLink>
      </p>
    </section>
  )
}

export default Profile;
