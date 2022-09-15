import React, { useState, } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
// import Movies from '../Movies';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  const { pathname } = useLocation();
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsNavigationMenuOpen(true);
  };

  const closeNavigationMenu = () => {
    setIsNavigationMenuOpen(false);
  }

  // регистрация пользователей
  // const handleRegister = (updateRegister) => {
  //   return auth.register(updateRegister.email, updateRegister.password)
  //     .then(() => {
  //       setIsInfoTooltipOpen(true);
  //       setIsRegistrationSuccessful(true);
  //       history.push('/signin');
  //     })
  //     .catch(() => {
  //       setIsRegistrationSuccessful(false);
  //     })
  //     .finally(() => {
  //       setIsInfoTooltipOpen(true);
  //       updateRegister.onRenderLoading(false)
  //     })
  // }

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
        <Route path="/signup"
          element={<Register location={pathname}/>}>
        </Route>
        <Route path="/signin"
          element={<Login location={pathname}/>}>
        </Route>
        <Route path="/profile"
          element={<Profile location={pathname}/>}>
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
