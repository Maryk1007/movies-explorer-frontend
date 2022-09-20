import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';


function Header({ location }) {

  const headerPromo = '/';

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
      headerPromo.includes(location) ? 'header__promo header_active' :
      headerMain.includes(location) ? 'header__main header_active' :
      headerTypeSign.includes(location) ? 'header__sign header_active' : ''
    }`;

    const classNameBurgerMenu=`${headerMain.includes(location) ? 'header__burger-menu' : 'header__burger-menu_disabled'}`;
    const classNameNavigationMenu=`${headerPromo.includes(location) ? 'header__nav' : 'header__nav header__nav_disabled'}`;

    const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

    const openNavigationMenu = () => {
      setIsNavigationMenuOpen(true)
    };
    const closeNavigationMenu = () => {
      setIsNavigationMenuOpen(false)
    };

    return (
    <header className={classNameHeader}>
      <Link to={'/'}>
        <img className='logo' src={logo} alt='Логотип сайта' />
      </Link>
      <nav className={classNameNavigationMenu}>
        <ul className='header__list'>
          <li className='header__nav_item'><Link to={`/signup`} className="header__link">Регистрация</Link></li>
          <li className='header__nav_item'><Link to={`/signin`} className="header__link header__link_type_button">Войти</Link></li>
        </ul>
      </nav>
      <button className={classNameBurgerMenu} type='button' onClick={openNavigationMenu}></button>
      <Navigation
        isOpen={isNavigationMenuOpen}
        onClose={closeNavigationMenu}/>
    </header>
  );
}

export default Header;
