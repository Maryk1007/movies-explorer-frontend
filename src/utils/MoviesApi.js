import { MOVIES_URL } from "./config";

class MoviesApi {
  constructor({baseUrl, headers}) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  //проверить ответ
  _checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

  //получить все фильмы с сервера
  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResponse)
  }
}

export default new MoviesApi({
  baseUrl: `${MOVIES_URL}`,
  headers: {
    'Content-Type': 'application/json'
  }
})
