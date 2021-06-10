import buttonClick from './Functions/redux_functions/buttonClick';

function reducer(state={text: '!Missing Text!'}, action) {
    switch(action.type) {
        case 'ENTER_KEY':
            console.log('CHANGE_TEXT action occured');
            buttonClick(state, action);
            return state;
        case 'CHOICE_SELECT':
            console.log('CHOICE_SELECT action detected: ', action.option)
            return state;
        case 'BUTTON_ACTION':
            console.log('BUTTON_ACTION action occured');
            buttonClick(state, action);
            return state;
        default:
            console.log('Unhandled redux action: ' + action.text);
            return state;
    }
}

export default reducer;