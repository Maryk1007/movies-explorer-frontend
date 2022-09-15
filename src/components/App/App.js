import React, { useState, } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
// import Register from '../Register';
// import Login from '../Login';
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
