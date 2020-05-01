import React, { useState, useEffect } from 'react';
import Button from './button';
import FriendProfile from './friendProfile';


export default function Friend() {

    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [friend, setFriend] = useState();

    function getFriend(){
        setLoading(true);
        fetch("https://www.randomuser.me/api?results=1")
          .then(res => res.json())
          .then(data => {
            setLoading(false);
            console.log(data.results[0]);
            setFriend(data.results[0]);
            console.log(friend);
            // Don't know why here friend isn't changed by the setFriend function

          })
          .catch(err => {
            setError(true);
            setLoading(false);
          });
    }



    return (
        <div>
          {isLoading && <p>Loading ....</p>}
          {hasError && <p>Something went wrong</p>}
          {!hasError && <FriendProfile friend = {friend} />}
          <Button handler = {getFriend} />
          

        </div>

      );
}