import buttonClick from './Functions/redux_functions/buttonClick';
import enterPress from './Functions/redux_functions/enterPress';

function reducer(state={text: '!Missing Text!'}, action) {
    switch(action.type) {
        case 'ENTER_PRESSED':
            console.log('ENTER_PRESSED action occured');
            enterPress(state, action);
            return state;
        case 'CHOICE_SELECT':
            console.log('CHOICE_SELECT action detected: ', action.option)
            return state;
        case 'BUTTON_ACTION':
            console.log('BUTTON_ACTION action occured');
            buttonClick(state, action);
            return state;
        case 'FINISHED_TYPING':
            console.log('FINISHED_TYPING action occured');
            state.typing = false;
            return state;
        default:
            console.log('Unhandled redux action: ' + action.text);
            return state;
    }
}

export default reducer;