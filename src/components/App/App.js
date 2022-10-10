import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router";
import *as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

import { MOVIES_URL } from '../../utils/config';
import { SERVER_UNKNOWN_ERROR, USER_DATA_CHANGED, USER_DATA_ERROR } from '../../utils/constants';
import { updateMoviesImage } from '../../utils/MoviesToolFilter';


function App() {
  const { pathname } = useLocation();
  const history = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);
  const [moviesArray, setMoviesArray] = useState([]);
  const [savedMoviesArray, setSavedMoviesArray] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [profileMessage, setProfileMessage] = useState('');

  const [listHidden, setListHidden] = useState(true);
  const [listError, setListError] = useState(null);

  const [keyword, setKeyword] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      Promise
      .all([MainApi.getProfile(), MainApi.getMovies()])
      .then(([user, movies]) => {
        const updatedMovies = updateMoviesImage(movies, MOVIES_URL);
        setCurrentUser(user);
        setSavedMoviesArray(updatedMovies);
      })
      .catch((message) => {
        console.log(message)
      })
    }
  }, [loggedIn])

  const updateSaveState = (moviesArray, savedMoviesArray) => {
    const newMoviesArray = [];
    const savedIds = [];

    savedMoviesArray.forEach((savedMovie) => {
      savedIds.push(savedMovie.movieId);
    })

    moviesArray.forEach((movie) => {
      movie['saved'] = savedIds.includes(movie.id);
      newMoviesArray.push(movie)
    })
    return newMoviesArray;
  }

  useEffect(() => {
    const dataStorageMovies = JSON.parse(localStorage.getItem('cachedMoviesArray')) || [];
    setListHidden(dataStorageMovies.length === 0);
    setMoviesArray(dataStorageMovies);

    const dataStorageKeyword = localStorage.getItem('cachedKeyword') || '';
    setKeyword(dataStorageKeyword);

    const dataStorageCheckbox = localStorage.getItem('cachedChecked') || 'false';
    setChecked(dataStorageCheckbox === 'true');
  }, [loggedIn])

  useEffect(() => {
    localStorage.setItem('cachedMoviesArray', JSON.stringify(moviesArray));
  }, [moviesArray])

  useEffect(() => {
    localStorage.setItem('cachedChecked', checked)
  }, [checked])

  useEffect(() => {
    localStorage.setItem('cachedKeyword', keyword)
  }, [keyword])


  const onSearch = (keyword, checkbox) => {
    if (moviesArray.length > 0) {
      const saveStateMovies = updateSaveState(moviesArray, savedMoviesArray);
      setMoviesArray(saveStateMovies);
      setKeyword(keyword);
      setChecked(checkbox);
      setListHidden(false);
      setListError(null);
    } else {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((response) => {
          const updatedMovies = updateMoviesImage(response, MOVIES_URL);
          const saveStateMovies = updateSaveState(updatedMovies, savedMoviesArray);
          setMoviesArray(saveStateMovies);
          setKeyword(keyword);
          setChecked(checkbox);
          setIsLoading(false);
          setListHidden(false);
          setListError(null);
        })
        .catch((message) => {
          console.log(message)
          setIsLoading(false);
          setListHidden(false);
          setListError(SERVER_UNKNOWN_ERROR);
        })
    }
  }

  const onSaveClick = (movie) => {
    MainApi.createMovie(movie)
      .then((movie) => {
        const updateSavedMovies = [movie, ...savedMoviesArray];
        const updateMovies = updateSaveState(moviesArray, updateSavedMovies);
        setSavedMoviesArray(updateSavedMovies);
        setMoviesArray(updateMovies);
      })
      .catch((message) => {
        console.log(message);
      })
  }

  const onDeleteClick = (movie) => {
    MainApi.deleteMovie(movie._id)
      .then((response) => {
        const updateSavedMovies = savedMoviesArray.filter((savedMovie) => savedMovie._id !== response._id);
        const updateMovies = updateSaveState(moviesArray, updateSavedMovies);
        setSavedMoviesArray(updateSavedMovies);
        setMoviesArray(updateMovies);
      })
      .catch((message) => {
        console.log(message);
      })
  }

  const handleRegister =(updateRegister)=>{
    return auth
      .register(updateRegister.email, updateRegister.password, updateRegister.name)
      .then(() => {
        handleLogin(updateRegister);
        history("/movies", { replace: false });
      })
      .catch((message) => {
        console.log(message);
      })
      .finally(()=>{
        updateRegister.onRenderLoading(false)
      })
  }

  const handleLogin = (updateLogin)=>{
    return auth
      .authorize(updateLogin.email, updateLogin.password)
      .then((data) => {
        if (data.token){
          localStorage.setItem('token', data.token)
          tokenCheck(updateLogin.email);
          history("/movies", { replace: false });
        }
      })
      .catch((message) => {
        console.log(message);
      })
      .finally(()=>{
        updateLogin.onRenderLoading(false)
      })
  }

  const tokenCheck = () => {
    const token = localStorage.getItem('token');

    if (token) {
      auth.getContent(token)
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((message) => {
        console.log(message)
        history("/signin");
      })
    };
  };

  useEffect(() => {
    tokenCheck()
  }, []);

  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cachedMoviesArray');
    localStorage.removeItem('cachedKeyword');
    localStorage.removeItem('cachedChecked');
    setCurrentUser({});
    setLoggedIn(false);
    history('/')
  };

  const handleUpdateUser = (email, name) => {
    MainApi.editProfile(email, name)
      .then((user) => {
        setCurrentUser(user);
        setProfileMessage(USER_DATA_CHANGED);
      })
      .catch((message) => {
        console.log(message);
        setProfileMessage(USER_DATA_ERROR);
      })
  }

  const handleSubmit = (evt)=>{
    evt.preventDefault();
  }

  const getYear=()=>{
    return new Date().getFullYear();
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          location={pathname}
          loggedIn={loggedIn}
        />
        <Routes>
          <Route exact path="/"
            element={<Main location={pathname}/>}>
          </Route>
          <Route exact path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn} location={pathname}>
              <Movies
                onSubmit={handleSubmit}
                onSearch={onSearch}
                onSaveClick={onSaveClick}
                isLoading={isLoading}
                listHidden={listHidden}
                listError={listError}
                checked={checked}
                setChecked={setChecked}
                moviesArray={moviesArray}/>
            </ProtectedRoute>}>
          </Route>
          <Route exact path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn} location={pathname}>
              <SavedMovies
              onSubmit={handleSubmit}
              onDeleteClick={onDeleteClick}
              moviesArray={savedMoviesArray}/>
            </ProtectedRoute>
          }>
          </Route>
          <Route path="/signup"
            element={<Register
              handleRegister={handleRegister}/>}>
          </Route>
          <Route path="/signin"
            element={<Login
              handleLogin={handleLogin}/>}>
          </Route>
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn} location={pathname}>
              <Profile
                profileMessage={profileMessage}
                onSignOut={onSignOut}
                handleUpdateUser={handleUpdateUser}
                onSubmit={handleSubmit}/>
            </ProtectedRoute>}>
          </Route>
          <Route exact path="*"
            element={<PageNotFound/>}>
          </Route>
        </Routes>
        <Footer
            date={getYear()}
            location={pathname}
          />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
