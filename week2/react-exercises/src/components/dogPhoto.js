import React from "react";

export default function DogPhoto(props) {
    return ( 
        <img className = "dogPhotos" src = {props.photo}  alt={props.index} />
       
    )


}
