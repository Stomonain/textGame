
function makeChoice(state, newSequence) {
    state.dialogue = newSequence();
    state.text = state.dialogue.text;

    return state;
}

export default makeChoice;