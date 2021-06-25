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

    /*
<div className='Incrementer' style={styling}>
            <p>{props.label}:</p>
            <Button
                style={{
                    width: 40,
                    height: 40,
                    position: 'relative'
                }}
                onClick={decrementValue}
                > -
            </Button>
            <text>{value}</text>
            <Button
                style={{
                    width: 40,
                    height: 40,
                    position: 'relative'
                }}
                onClick={incrementValue}
                > +
            </Button>
        </div>
    */

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
              incrementFunction={() => console.log(strength)}
              decrementFunction={() => setStrength(strength - 1)}
              value={strength}
            />

            <Incrementer 
              label='Intelligence'
              top='25%'
              left='8%'
              width='15%'
            />

            <Incrementer 
              label='Constitution'
              top='40%'
              left='8%'
              width='15%'
            />

            <Incrementer 
              label='Attraction'
              top='55%'
              left='8%'
              width='15%'
            />

            <Incrementer 
              label='Will'
              top='70%'
              left='8%'
              width='15%'
            />

            <input  type="text" name="name" style={inputStyling} onChange={e => setName(e.target.value)}/>

            <Button
              style={{
                  bottom: '10%',
                  right: '10%'
              }}
              onClick={() => store.dispatch({type: 'GAME_START'})}
            >
                Create
            </Button>
        </div>
    )

}

export default CharacterCreationScreen;