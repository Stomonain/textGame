import React from 'react';
import './App.css';

import TextBox from './TextBox';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import store from './../store';

function App() {
  function handleKeyPress(key) {
    console.log('Key Pressed: ' + key.charCode);
  }

  const storeText = useSelector((state) => state.text);

  return (
    <div className="App" onKeyDown={handleKeyPress}>
      <br />
      <TextBox text = {storeText}
        width={'60%'}
        height={'15%'}
        top={'20%'}
        left={'18%'}
        id={'mainGameTextBox'}
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