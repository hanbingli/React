import React from 'react';

function Guarantee(props){
    return (
        <div className = "guaranteeBlocks">
            <img scr ={props.img} />
            {console.log(props.img)}
            {/* Why the img src isn't working?? */}
            <h1>{props.title}</h1>
            <h>{props.description}</h>
            
        </div>
    )
}



export default Guarantee;