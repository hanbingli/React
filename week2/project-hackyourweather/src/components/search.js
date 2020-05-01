

import React, { useState } from 'react'
import WeatherBlock from './wBlock'
export default function Search() {
  const [cityInput, setCityInput] = useState('')
  const [cityData, setCityData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  const getCity = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Enter a proper city name')
        }
        return res.json()
      })
      .then((data) => {
        setLoading(true)
        setCityData(data)
      })
      .catch((err) => {
        setError(true)
      })
  }
  const getCityInfo = (event) => {
    event.preventDefault()
    getCity(cityInput)
  }
  return (
    <div className="searchBar">
      <h1 className="title">Weather</h1>
      <form onSubmit={getCityInfo}>
        <input
          placeholder="Name of the city"
          type="text"
          value={cityInput}
          onChange={(event) => setCityInput(event.target.value)}
        />
        <button type="submit"> Search </button>
      </form>
      {!isLoading && <p>Loading ....</p>}
      {hasError && <p>Something went wrong</p>}
      {Object.keys(cityData).length !== 0 && isLoading && !hasError && (
        <WeatherBlock city={cityData} />
      )}
    </div>
  )
}