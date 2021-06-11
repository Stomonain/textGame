function screenChange(state, action) {
    state.screen = action.screen;
    console.log('screenChange: ' + state.screen);
    return state;
}

export default screenChange;