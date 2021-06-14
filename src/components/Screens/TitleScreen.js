import React from 'react';
import './TitleScreen.css';

import Button from 'react-bootstrap/Button';
import Text from './../Elements/Text';
import store from '../../store';

function TitleScreen(props) {
  var styling = {
    
    visibility: props.screen === 'TitleScreen' ? 'visible' : 'hidden'
  }

  return (
    <div className="TitleScreen" style={styling}>
      <Text 
        text='Dungeon Dudes'
        fontSize='3em'
        top='10%'
      />
      <Button
        style={{
            width: 300,
            height: 50,
            right: '43%',
            top: '50%',
          }}
        onClick={() => store.dispatch({type: 'BUTTON_ACTION', buttonType: 'gameStart'})}
        > Start </Button>
    </div>
  );
}

export default TitleScreen;