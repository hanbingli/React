import React from "react";

export default function FriendProfile(props) {
    return ( 
        <ul className="profileList">
           <li>First Name: {props.friend.name.first}</li>
           <li>Last Name: {props.friend.name.last}</li>
           <li>Address: {props.friend.location.street}</li>
           <li>Country: {props.friend.location.state}</li>
           <li>Email Address: {props.friend.email}</li>
           <li>Phone Number: {props.friend.phone}</li>
    
    
        </ul>)
       
    


}
