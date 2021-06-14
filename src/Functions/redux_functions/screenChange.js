function screenChange(state, screen) {
    state.screen = screen;
    console.log('screenChange: ' + state.screen);
    return state;
}

export default screenChange;