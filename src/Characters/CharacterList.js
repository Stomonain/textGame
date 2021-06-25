import { Character } from "./Character";
import Constants from './../Constants';

//str, int, con, atr, wil, color, textSpeed, style, level

var narrator = new Character(0, 'narrator', 1, 1, 1, 1, 1, '#000000', Constants.DEFAULT_TEXT_SPEED, 'default', 1);

var pc = new Character(1, 'pc', 5, 5, 5, 5, 5, '#000000', Constants.DEFAULT_TEXT_SPEED, 'default', 1);

var misc = new Character(2, 'misc', 5, 5, 5, 5, 5, '#000000', Constants.DEFAULT_TEXT_SPEED, 'default', 1);

var paladin = new Character(3, 'Palaya', 14, 5, 10, 12, 14, '#6b21b0', 30, 'default', 1);



export let characterList = [
    narrator,
    pc,
    misc,
    paladin
];