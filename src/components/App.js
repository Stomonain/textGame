import React, { useEffect } from 'react';
import './App.css';

import MainScreen from './Screens/MainScreen';
import TitleScreen from './Screens/TitleScreen';
import { useSelector } from 'react-redux';
import store from './../store';

function App() {

  const screen = useSelector((state) => state.screen);

  //handles the player hitting certain keys
  function handleKeyDown(key) {
    switch(key.keyCode) {

      case 13:    //Enter key
        store.dispatch({type: 'ENTER_PRESSED'})
        break;

      default:
        return;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
  }, []);

  return (
    <div className="App" onKeyDown={handleKeyDown}>
      <TitleScreen  screen={screen}/>
      <MainScreen  screen={screen}/>
    </div>
  );
}

export default App;
