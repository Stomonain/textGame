import Sequence from "./Sequence";
import {Dialogue} from './../Dialogue'
import React, { useState, useEffect} from 'react';

import Constants from './../Constants';
import store from './../store';

function gameStart(state) {
    console.log("Game Started!");

    var m2 = new Dialogue('dialogue', 'narrator', 'This is the second message', Constants.DEFAULT_TEXT_SPEED, null);
    var m1 = new Dialogue('dialogue', 'narrator', 'This is the text of the dialogue', Constants.DEFAULT_TEXT_SPEED, m2);

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