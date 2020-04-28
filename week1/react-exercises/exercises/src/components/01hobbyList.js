import React from 'react';

function Hobby(props){
    return <li>{props.hobby}</li>
}




function HobbyList(){
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

    return (
        <div>
            {
                hobbies.map(h=> {
                    return <Hobby hobby = {h} />
                })
            } 
        </div>
    )
}


export default HobbyList;