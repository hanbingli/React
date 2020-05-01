import React from "react";

export default function Joke({joke}) {
    return ( 
        <div>
            <p>{joke.setup}</p><br/>
            <p>{joke.punchline}</p>

        </div>
       
    )


}