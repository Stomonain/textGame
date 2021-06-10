const testStrings = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    'Oh....me?  You\'re talking about me?  That\'s just a silly accusation.',
    'You can\'t do that!  You\'re not strong enough!',
    'If you only had one shot, one opportunity, would you take it or let it slip?',
    'Thank you kind sir!',
    'Have you seen Armand Christoph?',
    'I am tired of Earth.  These people.  I am tired of being caught in the tangle of their lives.',
    'I love love love love LOVE it when you talk like that!',
    'Oh, you\'re approaching me?',
    'Very nasty place.  Filled with....enemies.....'
]

function buttonClick(state, action) {
    var randomInt = Math.floor(Math.random() * 10);
    state.text = testStrings[randomInt];
    //state.text = action.text;
    return state;
}

export default buttonClick;