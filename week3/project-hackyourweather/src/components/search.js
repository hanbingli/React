import React, { useState } from 'react'
import WeatherBlock from './wBlock'



export default function Search() {

  const [cityList, setCityList] = useState([])
  const [cityInput, setCityInput] = useState('')

  const [cityData, setCityData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(null)

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

  const getCity = (city) => {
    setLoading(true)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {   throw new Error("Not a valid input")}
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setCityData(data)
        setCityList([data, ...cityList])
        console.log(cityList)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }



  const getCityInfo = (event) => {
    event.preventDefault()
    getCity(cityInput)
  }

  const deleteCity = (id) => {
    const cityLeft = cityList.filter(c => c.id !== id)
    setCityList(cityLeft)
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
          {cityInput.length>1 && <button type="submit"> Search City </button>}
          {cityInput.length <= 1 && <p>"Come on! keep typing~"</p> }
        
      </form>

      {isLoading && <p>Loading ....</p>}
      {hasError && <p>{hasError}</p>}
      {cityData && (
        cityList.map(c => <WeatherBlock city={c} key={c.id} deleteCity={deleteCity} />)
      )}

    </div>
  )
}