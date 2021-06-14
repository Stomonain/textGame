
function enterPress(state, action) {
    if(state.typing) {
        state.typing = false;
    }
    else {
        
        if(state.dialogue.next) {
            state.typing = true;
            state.dialogue = state.dialogue.next;
            state.text = state.dialogue.text;
        }
    }
    return state;
}

export default enterPress;