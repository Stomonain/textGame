
function makeChoice(state, newSequence) {
    state.dialogue = newSequence();
    state.text = state.dialogue.text;
    state.choosing = false;
    return state;
}

export default makeChoice;