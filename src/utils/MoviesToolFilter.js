import { SHORT_FILM } from "./constants";

export const filterByKeyword = (moviesArr, query, searchFields) => {
  return moviesArr.filter((movieInfo) => {
    let found = false;
    searchFields.forEach((field) => {
      if (movieInfo[field] && movieInfo[field].toLowerCase().includes(query.toLowerCase())) {
        found = true;
      }
    })
    return found;
  })
};

export const filterByCheckbox = (moviesArr, checkbox) => {
  return moviesArr.filter((movieInfo) => {
    if (checkbox) {
      return movieInfo.duration <= SHORT_FILM;
    }
    return true;
  })
}

export const updateMoviesImage = (movie, baseUrl) => {
  return movie.map(movieInfo => {
    if (movieInfo.movieId) {
      movieInfo['image'] = movieInfo.thumbnail;
    } else {
      movieInfo['image'] = `${baseUrl}${movieInfo.image.url}`;
      movieInfo['thumbnail'] = `${baseUrl}${movieInfo.image.formats.thumbnail.url}`
    }
    return movieInfo;
  })
}
