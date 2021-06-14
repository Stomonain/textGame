import { Dialogue } from './Dialogue';
import { Choice } from './Choice';

import Constants from '../Constants';


var m3 = new Choice('Oh yes, oh yes yes yes', Constants.DEFAULT_TEXT_SPEED, null);
var m2 = new Dialogue('narrator', 'This is the second message of the first option', Constants.DEFAULT_TEXT_SPEED, m3);
var firstOption = new Dialogue('narrator', 'This is the first option', Constants.DEFAULT_TEXT_SPEED, m2);

export default firstOption;

/*
export let gameStart = new Sequence('gameStart', function() {
    console.log("Game Started!");

    var m2 = new Dialogue('dialogue', 'narrator', 'This is the second message', Constants.DEFAULT_TEXT_SPEED, null);
    var m1 = new Dialogue('dialogue', 'narrator', 'This is the text of the dialogue', Constants.DEFAULT_TEXT_SPEED, m2);

    store.dialogue = m1;

})
*/