import { Dialogue } from './Dialogue';
import { Choice } from './Choice';
import firstOption from './firstOption';
import secondOption from './secondOption';
import thirdOption from './thirdOption';

import Constants from '../Constants';

function OpeningSequence() {
    var choices = new Array(
        {
            text: 'First Option',
            decision: firstOption
        },
        {
            text: 'Second Option',
            decision: secondOption
        },
        {
            text: 'Third Option',
            decision: thirdOption
        }
    )
    const m3 = new Choice('What will you choose?', Constants.DEFAULT_TEXT_SPEED, choices);
    const m2 = new Dialogue('narrator', 'This is the second message', Constants.DEFAULT_TEXT_SPEED, m3);
    const m1 = new Dialogue('narrator', 'This is the text of the dialogue', Constants.DEFAULT_TEXT_SPEED, m2);

    return m1;
}
export default OpeningSequence;