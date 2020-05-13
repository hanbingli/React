import React from 'react';
import {Link} from 'react-router-dom';



function WeatherBlock({city, deleteCity}) {



  return (
    <div className ="weatherBlock" key = {city.id}>
      <button className = "deleteCityBtn" onClick ={() => deleteCity(city.id)}>X</button>
  
     <h1>{city.name}, {city.sys.country}</h1>

     <h2>{city.weather[0].main}</h2>
     <p>{city.weather[0].description}</p>

     <p>min temp: {city.main.temp_min}</p>
     <p>max temp: {city.main.temp_max}</p>
     <p>location: {city.coord.lat}, {city.coord.lon}</p>

     <Link to={`/${city.id}`}>For more weather forecast
       </Link>
     
    </div>
  );
}



export default WeatherBlock;