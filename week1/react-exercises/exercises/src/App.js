import React from 'react';

import './App.css';

import HobbyList from './components/01hobbyList';
import Guarantee from './components/02guarantee';
import Counter from './components/03counter';


import fShipping from './pic/f-delivery.png';
import coin from './pic/coin.png';
import chat from './pic/chat.png';




function App() {
  return (
    <div className="App">
      <HobbyList />

      <div className = "guarantee">

      <Guarantee img ={fShipping} title = {"Free Shipping"} description ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. "} />
      <Guarantee img ={coin} title = {"100 % Money Back"} description ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. "} />
      <Guarantee img ={chat} title = {"24/7 Online Support"} description ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. "} />
      </div>

      <Counter />
    </div>
  );
}

export default App;
