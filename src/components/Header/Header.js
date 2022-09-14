import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';


function Header({ isOpen, onClose, onClick, location }) {
  const headerMain = [
    '/movies',
    '/saved-movies',
    '/profile'
  ];

  const headerTypeSign = [
    '/signin',
    '/signup'
  ];
    const classNameHeader=`header ${
      location='/' ? 'header__promo' :
      headerMain.includes(location) ? 'header__main' :
      headerTypeSign.includes(location) ? 'header__sign' : ''
    }`;

    const classNameBurgerMenu=`${headerMain.includes(location) ? 'header__burger-menu' : 'header__burger-menu_disabled'}`;
    const classNameNavigationMenu=`${headerTypeSign.includes(location) ? 'header__nav' : 'header__nav header__nav_disabled'}`;

    return (
    <header className={classNameHeader}>
      <Link to={'/'}>
        <img className='logo' src={logo} alt='Логотип сайта' />
      </Link>
      <nav className={classNameNavigationMenu}>
        <ul className='header__list'>
          <li className='header__nav_item'><NavLink to={`./signup`} className="header__link">Регистрация</NavLink></li>
          <li className='header__nav_item'><NavLink to={`./signin`} className="header__link header__link_type_button">Войти</NavLink></li>
        </ul>
      </nav>
      <button className={classNameBurgerMenu} type='button' onClick={onClick}></button>
    </header>
  );
}

export default Header;
