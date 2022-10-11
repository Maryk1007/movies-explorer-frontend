const github = 'https://github.com/Maryk1007';
const yandex = 'https://practicum.yandex.ru';
const staticSite = 'https://maryk1007.github.io/how-to-learn';
const adaptiveSite = 'https://maryk1007.github.io/Russian-Travel';
const spa = 'https://maryk1007.github.io/mesto-react';

const SHORT_FILM = 40;
const DESKTOP_WIDTH = 1280;
const TABLET_WIDTH = 768;
const RENDER_WIDTH = {
  desktop: { firstRenderSize: 12, nextRenderSize: 3 },
  tablet: { firstRenderSize: 8, nextRenderSize: 2 },
  default: { firstRenderSize: 5, nextRenderSize: 2 },
};
const SERVER_UNKNOWN_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз';
const USER_DATA_CHANGED = 'Изменения сохранены';
const USER_DATA_ERROR = 'Во время обновления данных произошла ошибка...';

export {
  github,
  yandex,
  staticSite,
  adaptiveSite,
  spa,
  SHORT_FILM,
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  RENDER_WIDTH,
  SERVER_UNKNOWN_ERROR,
  USER_DATA_CHANGED,
  USER_DATA_ERROR
};
