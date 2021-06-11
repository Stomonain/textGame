import React from 'react';
import './TitleScreen.css';

import Button from 'react-bootstrap/Button';
import store from '../../store';

function TitleScreen(props) {
  var styling = {
    position: 'absolute',
    visibility: props.screen === 'titleScreen' ? 'visible' : 'hidden'
  }

  return (
    <div className="TitleScreen" style={styling}>
      <br />
      Dungeon Dudes
      <br />
      <br />
      <br />
      <br />
      <Button
        style={{
            width: 300,
            height: 50,
            marginLeft: '30%'
          }}
        onClick={() => store.dispatch({type: 'BUTTON_ACTION', buttonType: 'screenChange', screen:'mainScreen'})}
        > Change Screen </Button>
    </div>
  );
}

export default TitleScreen;