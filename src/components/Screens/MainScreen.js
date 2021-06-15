import React from 'react';
import './MainScreen.css';

import TextBox from '../Elements/TextBox';
import Button from 'react-bootstrap/Button';
import ChoiceBox from '../Elements/ChoiceBox';
import { useSelector } from 'react-redux';
import store from './../../store';

function MainScreen(props) {
  var styling = {
    visibility: props.screen === 'MainScreen' ? 'visible' : 'hidden'
}

  const storeText = useSelector((state) => state.text);
  const isChoosing = useSelector((state) => state.choosing);
  const typing = useSelector((state) => state.typing);
  const dialogue = useSelector((state) => state.dialogue);
  
  return (
    <div className="MainScreen" style={styling}>
      <TextBox text = {storeText}
        width={'60%'}
        height={'15%'}
        bottom={ isChoosing ? '52.5%' : '30%'}
        left={'18%'}
        id={'mainGameTextBox'}
        typing={typing}
      />
      <ChoiceBox
        width={'60%'}
        height={'20%'}
        bottom={'30%'}
        left={'18%'}
        id={'choiceBox'}
        typing={typing}
        visibility={ isChoosing ? 'visible' : 'hidden'}
        options={dialogue.options}
      />
      <Button
        style={{
            width: 300,
            height: 50,
            left: '10%',
            bottom: '10%'
          }}
        onClick={() => store.dispatch({type: 'BUTTON_ACTION', buttonType: 'choice'})}
        > Change Text </Button>
      <Button
        style={{
            width: 300,
            height: 50,
            right: '10%',
            bottom: '10%'
          }}
        onClick={() => store.dispatch({type: 'BUTTON_ACTION', buttonType: 'screenChange', screen: 'TitleScreen'})}
        > Quit </Button>
    </div>
  );
}

export default MainScreen;