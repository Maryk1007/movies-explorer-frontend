import React from 'react';

function AboutProject() {
  return (
      <section className="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__list">
          <li className="about-project__item">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__item">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="about-project__grid">
            <p className="about-project__grid-cell cell cell__background">1 неделя</p>
            <p className="about-project__grid-cell cell">4 недели</p>
            <p className="about-project__grid-cell">Back-end</p>
            <p className="about-project__grid-cell">Front-end</p>
        </div>
      </section>
  );
}

export default AboutProject;
