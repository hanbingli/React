
import React, { useState, useEffect } from "react";
import Friend from './components/friend';
import DoggyGallery from './components/dogGallery';
import RandomJoke from './components/randomJoke';

// Effects / Side effects
// - direct dom manuplations
// - fetching data
// - DOM APIs (like local storage, dom events clicks on whole page)
// - setInterval, setTimeout

export default function App() {
  

  return (
    <div className = "container">

      <div className = "friend">
        <Friend />
      </div>

      <div className = "dogGallery">
        <DoggyGallery />
      </div>

      <div className = "Joke">
              <RandomJoke />
      </div>



    </div>
    )
}
