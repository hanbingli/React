import React, { useState } from 'react';
import Button from './button';
import FriendProfile from './friendProfile';


export default function Friend() {

    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [friend, setFriend] = useState({});


   


    const getFriend= async() =>{
        
        try {
          setLoading(true);
          const res =  await fetch("https://www.randomuser.me/api?results=1");
  
          const data = await res.json();
          setFriend(data.results[0]);
          console.log(friend)

          
        }catch(err){
            setError(true)
          }finally{
            setLoading(false)
          }
        }

        

    return (
        <div>
          {isLoading && <p>Loading ....</p>}
          {hasError && <p>Something went wrong</p>}
          { friend  &&  <FriendProfile friend= {friend}/>}

          <Button handler = {getFriend} />


        </div>

      );
}

