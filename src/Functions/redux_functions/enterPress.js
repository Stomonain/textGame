
function enterPress(state, action) {
    // check to make sure we're actually on the main screen first
    if(state.screen !== 'MainScreen') 
        return state;

    if(state.typing) {
        state.typing = false;
    }
    else {
        if(state.dialogue.type === 'dialogue') {
            state.typing = true;
            state.dialogue = state.dialogue.next;
            state.text = state.dialogue.text;
            state.choosing = state.dialogue.type === 'choice' ? true : false;       //determines whether or not a choice is currently being presented to the player.  Used for UI purposes
        }
    }
    return state;
}

export default enterPress;