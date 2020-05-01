import React, { useState, useEffect } from 'react';
import Joke from './joke';



export default function RandomJoke() {

    const [joke, setJoke] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    useEffect( () => {
        setLoading(true);
        fetch("https://official-joke-api.appspot.com/random_joke")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setLoading(false);
            setJoke(data);
            console.log(joke);
          })
          .catch(err => {
            setError(true);
            setLoading(false);
          });
    }, []);



    return (
        <div>
          {isLoading && <p>Loading ....</p>}
          {hasError && <p>Something went wrong</p>}
          {!hasError && <Joke joke = {joke} />}
          
        </div>

      );
}