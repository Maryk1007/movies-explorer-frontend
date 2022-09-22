import {Link} from 'react-router-dom';

function Navigation({isOpen, onClose}) {
  const classNameNavigationMenu = `navigation ${isOpen ? 'navigation__opened' : ''}`

  return (
    <div className={classNameNavigationMenu}>
      <button
        className="navigation__button-close"
        aria-label="Кнопка закрытия меню"
        onClick={onClose}>
      </button>
      <ul className="navigation__list">
        <Link to={'/'} className="navigation__item navigation__link" onClick={onClose}>Главная</Link>
        <Link to={'/movies'} className="navigation__item navigation__link" onClick={onClose}>Фильмы</Link>
        <Link to={'/saved-movies'} className="navigation__item navigation__link" onClick={onClose}>Сохранённые фильмы</Link>
      </ul>
      <div className="account">
      <Link to={'/profile'} className='account__link' onClick={onClose}>
        <div className="account__wrap">
        <div className="account__icon"></div>
        <p className="account__subtitle">Аккаунт</p>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Navigation;
