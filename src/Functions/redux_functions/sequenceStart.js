function sequenceStarted(state, action) {
    state.dialogue = action.dialogue;
    state.text = state.dialogue.text;
    return state;
}

export default sequenceStarted;