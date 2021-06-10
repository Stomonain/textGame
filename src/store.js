import {createStore} from 'redux';

import reducer from './reducer'


const store = createStore(reducer, {
    text: 'Nothing',
    stopTypeing: false
});

export default store;