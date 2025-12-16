import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './style/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AbooutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button className="button" onClick={toggleTheme}>theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
