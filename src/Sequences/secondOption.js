import { Dialogue } from './Dialogue';
import { Choice } from './Choice';

import Constants from '../Constants';


var m3 = new Choice('This might actually be working', Constants.DEFAULT_TEXT_SPEED, null);
var m2 = new Dialogue('narrator', 'This is the second message of the second option', Constants.DEFAULT_TEXT_SPEED, m3);
var secondOption = new Dialogue('narrator', 'This is the second option', Constants.DEFAULT_TEXT_SPEED, m2);

export default secondOption;

/*
export let gameStart = new Sequence('gameStart', function() {
    console.log("Game Started!");

    var m2 = new Dialogue('dialogue', 'narrator', 'This is the second message', Constants.DEFAULT_TEXT_SPEED, null);
    var m1 = new Dialogue('dialogue', 'narrator', 'This is the text of the dialogue', Constants.DEFAULT_TEXT_SPEED, m2);

    store.dialogue = m1;

})
*/