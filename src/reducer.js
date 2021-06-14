import buttonAction from './Functions/redux_functions/buttonAction';
import enterPress from './Functions/redux_functions/enterPress';

function reducer(state={text: '!Missing Text!'}, action) {
    switch(action.type) {
        case 'ENTER_PRESSED':
            console.log('ENTER_PRESSED action occured');
            enterPress(state, action);
            break;
        case 'CHOICE_SELECT':
            console.log('CHOICE_SELECT action detected: ', action.option)
            break;
        case 'BUTTON_ACTION':
            console.log('BUTTON_ACTION action occured');
            buttonAction(state, action);
            break;
        case 'FINISHED_TYPING':
            console.log('FINISHED_TYPING action occured');
            state.typing = false;
            break;
        case 'SEQUENCE_STARTED':
            console.log('SEQUENCE_STARTED action occured.');
            break;
        default:
            console.log('Unhandled redux action: ' + action.text);
    }
    return state;
}

export default reducer;