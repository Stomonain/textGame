import {createStore} from 'redux';

import reducer from './reducer'


const store = createStore(reducer, {
    text: 'Nothing',
    typing: false,
    screen: 'TitleScreen',
    dialogue: null
});

export default store;