import { Character } from "../../Characters/Character"
import Text from "../Elements/Text"
import Incrementer from "../Elements/Incrementer"
import { Button } from "react-bootstrap"
import store from './../../store';
import { useState, useEffect } from 'react';

import './CharacterCreationScreen.css';



function CharacterCreationScreen(props) {
    var styling = {
        visibility: props.screen === 'CharacterCreationScreen' ? 'visible' : 'hidden'
    }

    var inputStyling = {
      position: 'absolute',
      left: '30%',
      top: '10%',
      backgroundColor: 'black',
      borderStyle: 'solid',
      color: 'inherit',
      fontSize: '1.5em',
    }

    const [name, setName] = useState('');
    const [strength, setStrength] = useState(5);
    const [intelligence, setIntelligence] = useState(5);
    const [constitution, setConstitution] = useState(5);
    const [attraction, setAttraction] = useState(5);
    const [will, setWill] = useState(5);

    //These callback functions are passed to the incrementers
    //  All they do is make sure to update the values here whenever the incrementer changes them.
    var strCallback = (str) => {
      setStrength(str);
    }
    var intCallback = (int) => {
      setIntelligence(int);
    }
    var conCallback = (con) => {
      setConstitution(con);
    }
    var attCallback = (att) => {
      setAttraction(att);
    }
    var wilCallback = (wil) => {
      setWill(wil);
    }

    return (
        <div className='CharacterCreationScreen' style={styling}>
            <Text 
              text='Create Your Character:'
              fontSize='1.5em'
              left='30%'
            />

            <Incrementer 
              label='Strength'
              top='10%'
              left='8%'
              width='15%'
              passFunction={strCallback}
            />

            <Incrementer 
              label='Intelligence'
              top='25%'
              left='8%'
              width='15%'
              passFunction={intCallback}
            />

            <Incrementer 
              label='Constitution'
              top='40%'
              left='8%'
              width='15%'
              passFunction={conCallback}
            />

            <Incrementer 
              label='Attraction'
              top='55%'
              left='8%'
              width='15%'
              passFunction={attCallback}
            />

            <Incrementer 
              label='Will'
              top='70%'
              left='8%'
              width='15%'
              passFunction={wilCallback}
            />

            <input  type="text" name="name" style={inputStyling} onChange={e => setName(e.target.value)}/>

            <Button
              style={{
                  bottom: '10%',
                  right: '10%'
              }}
              onClick={() => store.dispatch({type: 'CREATE_FILE', name: name, str: strength, int: intelligence, con: constitution, att: attraction, wil: will})}
            >
                Create
            </Button>
        </div>
    )

}

export default CharacterCreationScreen;