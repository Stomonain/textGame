import React from 'react';
import './MainScreen.css';

import TextBox from '../Elements/TextBox';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import store from './../../store';

function MainScreen(props) {
  var styling = {
    position: 'absolute',
    visibility: props.screen === 'mainScreen' ? 'visible' : 'hidden'
}

  const storeText = useSelector((state) => state.text);
  const typing = useSelector((state) => state.typing);
  
  return (
    <div className="MainScreen" style={styling}>
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
        onClick={() => store.dispatch({type: 'BUTTON_ACTION', buttonType: 'choice'})}
        > Change Text </Button>
      <br />
      <Button
        style={{
            width: 300,
            height: 50,
            marginLeft: '30%'
          }}
        onClick={() => store.dispatch({type: 'BUTTON_ACTION', buttonType: 'screenChange', screen: 'titleScreen'})}
        > Quit </Button>
    </div>
  );
}

export default MainScreen;