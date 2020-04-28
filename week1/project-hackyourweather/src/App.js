import React from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherBlock from './components/wBlock'
import weatherData from './city-weather.json'

function App() {
  return (
    <div className="container">
    {weatherData.map(item => <WeatherBlock name ={item.name} country = {item.sys.country} weatherMain ={item.weather[0].main} weatherDescription = {item.weather[0].description} minTemp ={item.main.temp_min} maxTemp ={item.main.temp_max} lat={item.coord.lat} lon={item.coord.lon} />)
    }</div>
      
  );
}

export default App;
