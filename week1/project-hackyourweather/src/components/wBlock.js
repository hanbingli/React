import React from 'react';


function WeatherBlock(props) {



  return (
    <div className ="weatherBlock">
     <h1>{props.name}, {props.country}</h1>

     <h2>{props.weatherMain}</h2>
     <p>{props.weatherDescription}</p>

     <p>min temp: {props.minTemp}</p>
     <p>max temp: {props.maxTemp}</p>
     <p>location: {props.lat}, {props.lon}</p>
     
    </div>
  );
}



export default WeatherBlock;