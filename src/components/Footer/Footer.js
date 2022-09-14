import React from 'react';

import {
  yandex,
  github
} from '../../utils/constants';

function Footer({date, location}) {
  const footer = [
    '/',
    '/movies',
    '/saved-movies'
  ];
  const classNamefooter = `footer ${footer.includes(location) ? "footer__active" : ''}`;

  return (
    <>
      <footer className={classNamefooter}>
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <nav className="footer__links">
          <ul className="footer__list">
            <li className="footer__item">
              <a href={yandex} className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href={github} className="footer__link" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">&copy;{' ' + date}</p>
      </footer>
    </>
  );
}

export default Footer;
