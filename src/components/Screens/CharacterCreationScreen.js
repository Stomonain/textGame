import { Character } from "../../Characters/Character"
import Text from "../Elements/Text"
import Incrementer from "../Elements/Incrementer"
import { Button } from "react-bootstrap"
import store from './../../store';



function CharacterCreationScreen(props) {
    var styling = {
        visibility: props.screen === 'CharacterCreationScreen' ? 'visible' : 'hidden'
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