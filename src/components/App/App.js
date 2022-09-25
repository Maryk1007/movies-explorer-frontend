import React, { useState, } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  const { pathname } = useLocation();
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  //открыть меню навигации
  const handleBurgerMenuClick = () => {
    setIsNavigationMenuOpen(true);
  };

  // закрыть меню навигации
  const closeNavigationMenu = () => {
    setIsNavigationMenuOpen(false);
  }

  const handleSubmit = (evt)=>{
    evt.preventDefault();
  }

  // Установить текущий год в footer
  const getYear=()=>{
    return new Date().getFullYear();
    }

  return (
    <div className="page">
      <Header
        location={pathname}
        onClick={handleBurgerMenuClick}
        isOpen={isNavigationMenuOpen}
        onClose={closeNavigationMenu}
      />
      <Routes>
        <Route exact path="/"
          element={<Main location={pathname}/>}>
        </Route>
        <Route exact path="/movies"
          element={<Movies location={pathname}/>}
          onSubmit={handleSubmit}>
        </Route>
        <Route exact path="/saved-movies"
          element={<SavedMovies location={pathname}/>}
          onSubmit={handleSubmit}>
        </Route>
        <Route path="/signup"
          element={<Register location={pathname}/>}
          onSubmit={handleSubmit}>
        </Route>
        <Route path="/signin"
          element={<Login location={pathname}/>}
          onSubmit={handleSubmit}>
        </Route>
        <Route path="/profile"
          element={<Profile location={pathname}/>}
          onSubmit={handleSubmit}>
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
  );
}

export default App;
