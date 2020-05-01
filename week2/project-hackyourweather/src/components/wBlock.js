import React from 'react';


function WeatherBlock(props) {



  return (
    <div className ="weatherBlock">
  
     <h1>{props.city.name}, {props.city.sys.country}</h1>

     <h2>{props.city.weather[0].main}</h2>
     <p>{props.city.weather[0].description}</p>

     <p>min temp: {props.city.main.temp_min}</p>
     <p>max temp: {props.city.main.temp_max}</p>
     <p>location: {props.city.coord.lat}, {props.city.coord.lon}</p>
     
    </div>
  );
}



export default WeatherBlock;