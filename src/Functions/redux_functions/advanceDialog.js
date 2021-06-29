
function advanceDialog(state, action) {
    // check to make sure we're actually on the main screen first
    if(state.typing) {
        state.typing = false;
    }
    else {
        if(state.dialogue.type === 'dialogue') {
            state.typing = true;
            state.dialogue = state.dialogue.next;
            state.choosing = state.dialogue.type === 'choice' ? true : false;       //determines whether or not a choice is currently being presented to the player.  Used for UI purposes

            if(state.dialogue.character.name === 'narrator') {
                state.narrationTextBoxVisible = true;
                state.soloCharacterTextBoxVisible = false;
            }
            else {
                state.narrationTextBoxVisible = false;
                state.soloCharacterTextBoxVisible = true;
            }
        }
    }
    return state;
}

export default advanceDialog;