import React, { useState, useEffect } from 'react';
import Joke from './joke';



export default function RandomJoke() {

    const [joke, setJoke] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    useEffect( () => {
        setLoading(true);

        const getFriend= async() =>{
          setLoading(true);
          try {
            const res =  await fetch("https://official-joke-api.appspot.com/random_joke")
            if(res.ok){
              const data = await res.json()
              console.log(data);
              setLoading(false);
              setJoke(data);
              console.log(joke);
            }else{
              throw Error ('Error in fetching data')
            }
          }catch(err){
              setError(true)
            }finally{
              setLoading(false)
            }
          }
    
        
 
    }, []);



    return (
        <div>
          {isLoading && <p>Loading ....</p>}
          {hasError && <p>Something went wrong</p>}
          {!hasError && <Joke joke = {joke} />}
          
        </div>

      );
}