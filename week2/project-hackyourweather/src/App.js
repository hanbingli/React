import React from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherBlock from './components/wBlock';
import weatherData from './city-weather.json';
import Search from './components/search';


function App() {
  return (
    <div className="container">
      <Search />

    </div>
      
  );
}

export default App;
