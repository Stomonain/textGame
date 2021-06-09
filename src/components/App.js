import React from 'react';
import './App.css';

import TextBox from './TextBox';
import Button from 'react-bootstrap/Button';

function App() {
  function handleClick(e) {
    console.log("clickApp");
  }

  return (
    <div className="App" onClick={handleClick}>
      <TextBox text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        width={'40em'}
        height={'8em'}
      />
      <Button
        style={{
            width: 300,
            height: 50,
            marginLeft: '30%'
          }}
        > Hi </Button>
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