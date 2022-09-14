import {
  staticSite,
  adaptiveSite,
  spa
} from '../../utils/constants';

function Portfolio() {
  return (
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a className="portfolio__link" href={staticSite} target="_blank" rel="noreferrer">
              <p className="portfolio__subtitle">Статичный сайт</p>
              <div className="portfolio__symbol"></div>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href={adaptiveSite} target="_blank" rel="noreferrer">
              <p className="portfolio__subtitle">Адаптивный сайт</p>
              <div className="portfolio__symbol"></div>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href={spa} target="_blank" rel="noreferrer">
              <p className="portfolio__subtitle">Одностраничное приложение</p>
              <div className="portfolio__symbol"></div>
            </a>
          </li>
        </ul>
      </section>
  );
}

export default Portfolio;
