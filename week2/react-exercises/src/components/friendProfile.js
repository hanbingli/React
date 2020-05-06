import React from "react";

export default function FriendProfile({friend}) {
    return ( 
        <ul className="profileList">


           <li>First Name: {friend.name.first}</li>
           <li>Last Name: {friend.name.last}</li>
           <li>Address: {friend.location.street}</li>
           <li>Country: {friend.location.state}</li>
           <li>Email Address: {friend.email}</li>
           <li>Phone Number: {friend.phone}</li>
    
    
        </ul>)
       
    


}
