import React, { useState, useEffect } from 'react';
import Button from './dogButton';
import DogPhoto from './dogPhoto';


export default function DoggyGallery() {

    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);




    function getDogPhoto(){


        setLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            console.log(data.message);
            setLoading(false);
            setDogPhotos(dogPhotos => [...dogPhotos, data.message]);

// Why it doesn't work with push?
            console.log(dogPhotos);



          })
          .catch(err => {
            setError(true);
            setLoading(false);
          });
    }



    return (
        <div className = "dogGallery">
          {isLoading && <p>Loading ....</p>}
          {hasError && <p>Something went wrong</p>}



          <Button handler = {getDogPhoto} />

          {dogPhotos.map((doggy, index) => {
              return <DogPhoto photo= {doggy} index ={index} />})}

        {dogPhotos.length ==0 && <p>"Get your first dog by clicking the button!"</p>}

    

        </div>

      );
}