import React from "react";
import avatar from '../../images/avatar.jpg';
import { github } from '../../utils/constants';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <img
        className="about-me__avatar"
        src={avatar}
        alt="Аватар студента"
      />
      <h3 className="about-me__name">Мария</h3>
      <p className="about-me__description">Фронтенд-разработчик, 35 лет</p>
      <p className="about-me__biography">
        Я родилась и живу в Санкт-Петербурге.
        Я люблю удобные сервисы и приложения, поэтому выбрала вэб-разработку,
        чтобы работать над клиентской частью приложений и сайтов, делать их понятными, дружелюбными и отзывчивыми.
        Веб-разработка - как сборка пазла, где сразу виден результат.
        Люблю танцевать и путешествовать, побывала почти в 40 странах.
        </p>
      <ul className="about-me__list">
        <li className="about-me__item">
          <a className="about-me__link" href={github} target="_blank" rel="noreferrer">Github</a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
