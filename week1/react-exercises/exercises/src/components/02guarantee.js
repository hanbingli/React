import React from 'react';

function Guarantee({img, title, description}){

    return (
        <div className = "guaranteeBlocks">
            
            <h1>{title}</h1>
            <img scr ={img} alt= {title + " icon"} />
            <h3>{description}</h3>
            
        </div>
    )
}



export default Guarantee;