import React from 'react';

function Button(props){
    console.log('props', removeProperties)
    const { text, handleOnclick} = props;
        return(
        <button onClick ={handleOnclick}>{text}</button>
    )
}


export default Button;