import React, { useState, useEffect } from 'react';
import Button from './dogButton';
import DogPhoto from './dogPhoto';



export default function DoggyGallery() {

    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);




    const getDogPhoto = async() => {


        setLoading(true);
        try {
          const res = await fetch("https://dog.ceo/api/breeds/image/random")
          if(res.ok){
            const data = await res.json()
            setLoading(false);
            setDogPhotos(dogPhotos => [...dogPhotos, data.message]);
          }else{
            throw Error('Error in fetching data')
          }}
        catch(err){
          setError(true)
        }finally{
          setLoading(false)
        }
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