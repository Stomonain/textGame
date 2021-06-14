import { Dialogue } from './Dialogue';
import { Choice } from './Choice';
import firstOption from './firstOption';
import secondOption from './secondOption';
import thirdOption from './thirdOption';

import Constants from './../Constants';

function gameStart(state) {
    var choices = new Array(
        {
            text: 'First Option',
            decision: firstOption
        },
        {
            text: 'Second Option',
            decision: secondOption
        },
        {
            text: 'Third Option',
            decision: thirdOption
        }
    )
    var m3 = new Choice('What will you choose?', Constants.DEFAULT_TEXT_SPEED, choices);
    var m2 = new Dialogue('narrator', 'This is the second message', Constants.DEFAULT_TEXT_SPEED, m3);
    var m1 = new Dialogue('narrator', 'This is the text of the dialogue', Constants.DEFAULT_TEXT_SPEED, m2);

    state.dialogue = m1;
    state.text = state.dialogue.text;
}

export default gameStart;

/*
export let gameStart = new Sequence('gameStart', function() {
    console.log("Game Started!");

    var m2 = new Dialogue('dialogue', 'narrator', 'This is the second message', Constants.DEFAULT_TEXT_SPEED, null);
    var m1 = new Dialogue('dialogue', 'narrator', 'This is the text of the dialogue', Constants.DEFAULT_TEXT_SPEED, m2);

    store.dialogue = m1;

})
*/