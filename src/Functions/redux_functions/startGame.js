import OpeningSequence from "../../Sequences/OpeningSequence";

function startGame(state) {
    state.dialogue = OpeningSequence();
    state.text = state.dialogue.text;
    state.screen = 'MainScreen';
}

export default startGame;