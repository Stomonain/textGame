import {createStore} from 'redux';

import reducer from './reducer'
import { Dialogue } from './Sequences/Dialogue';


const store = createStore(reducer, {
    text: 'Nothing',
    typing: false,
    screen: 'TitleScreen',
    dialogue: new Dialogue,
    isChoosing: false,
    narrationTextBoxVisible: false,
    soloCharacterTextBoxVisible: false,
    characterNumber: 2,
    file: 0
});

export default store;