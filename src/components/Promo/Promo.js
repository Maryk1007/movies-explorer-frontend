import React from 'react';
import promo_logo from '../../images/promo_logo.svg';

function Promo(){
  return (
      <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img
          className="promo__logo"
          src={promo_logo}
          alt="Повторяющиеся буквы О и С"
        />
      </section>
  );
}

export default Promo;
