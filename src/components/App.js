import React, { useEffect } from 'react';
import './App.css';

import TextBox from './TextBox';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import store from './../store';

function App() {

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

  const storeText = useSelector((state) => state.text);
  const typing = useSelector((state) => state.typing);

  return (
    <div className="App" onKeyDown={handleKeyDown}>
      <br />
      <TextBox text = {storeText}
        width={'60%'}
        height={'15%'}
        top={'20%'}
        left={'18%'}
        id={'mainGameTextBox'}
        typing={typing}
      />
      <br />
      <br />
      <Button
        style={{
            width: 300,
            height: 50,
            marginLeft: '30%'
          }}
        onClick={() => store.dispatch({type: 'BUTTON_ACTION',text:'haha xd lol'})}
        > Change Text </Button>
    </div>
  );
}

export default App;

//STR
//PER
//INT
//CHR
//WILL

//Funny difficulty messages