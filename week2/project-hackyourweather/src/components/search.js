import React, { useState } from "react";
import WeatherBlock from './wBlock'


export default function Search() {

    const [cityInput, setCityInput] = useState('');

    const [cityData, setCityData] = useState({});

    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);


    function getCity(city){

        console.log(city)
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
        console.log(apiKey)

        setLoading(true);
  
//??????????? Don't know why it stops just before fetching????????????

        fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
          .then(res => res.json())
          .then(data => {
            
            setLoading(false);
            console.log(data);
            setCityData(data);
            console.log(cityData);


          })
          .catch(err => {
            setError(true);
            setLoading(false);
          });
    }

    const getCityInfo = event =>{
        event.preventDefault();
        getCity(cityInput)
    }

    return (
        <div className = "searchBar">
            <h1 className = "title">Weather</h1>
            <form onSubmit = {getCityInfo}> 
                <input placeholder = 'Name of the city' type = 'text' value = {cityInput} onChange = {(event) => setCityInput(event.target.value)}  />
                <button type = "submit" > Search </button>
            </form>

            {isLoading && <p>Loading ....</p>}
            {hasError && <p>Something went wrong</p>}
            {!hasError &&  <WeatherBlock city = {cityData} /> }
        </div>

      );
}
