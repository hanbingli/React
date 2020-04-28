import React from 'react';
import Button from './Button'
// import './style.css';



function App(){
    // const user = {
    //     name: 'Hanbing',
    //     age: 27,
    //     active: true
    // }
    // const title = "User"



    const [count, handleCount] = useState(0)

    function handleIncrease(){
        handleCount(count + 1)
    }


    return  (
        <div className ="App">
            {/* <h1>{title}</h1>
            <p>{user.name}></p> */}
            <Button text = "Increse" handleOnclick = {handleIncrease}
                />
            <Button text = "Decrese"/>
            <h1>count: {count}</h1>
        </div>
    )
}



export default App()