import Sequence from "./Sequence";

export let gameStart = new Sequence('gameStart', function() {
    console.log("Game Started!");
})