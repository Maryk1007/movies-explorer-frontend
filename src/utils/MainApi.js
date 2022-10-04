import { BASE_URL } from "./config";

class MainApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  //проверить ответ
  _checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);


  // //установить заголовок
  // _getHeaders() {
  //   return {
  //     authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //     ...this._headers,
  //   };
  // }

  //получить данные пользователя
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    },
    })
    .then(this._checkResponse)
  }
  //изменить данные пользователя
  editProfile(email, name) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        email,
        name,
      })
    })
    .then(this._checkResponse)
  }
  //получить сохраненные фильмы с сервера
  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    },
    })
    .then(this._checkResponse)
  }

  //сохранить фильм на сервере
  createMovie(movie){
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
    .then(this._checkResponse)
  }

  //удалить фильм с сервера
  deleteMovie(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    },
    })
    .then(this._checkResponse)
  }
}

export default new MainApi({
  baseUrl: `${BASE_URL}`
})
