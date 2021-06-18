import advanceDialog from "./advanceDialog";


function enterPress(state, action) {
    // check to make sure we're actually on the main screen first
    if(state.screen !== 'MainScreen') 
        return state;
    else {
        advanceDialog(state, action);
    }
    return state;
}

export default enterPress;