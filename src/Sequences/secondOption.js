import { Dialogue } from './Dialogue';
import { Choice } from './Choice';

import thirdOption from './thirdOption';

import Constants from '../Constants';
import firstOption from './firstOption';
import OpeningSequence from './OpeningSequence';

function secondOption() {
    var choices = new Array(
        {
            text: 'First Option',
            decision: firstOption
        },
        {
            text: 'Opening',
            decision: OpeningSequence
        },
        {
            text: 'Third Option',
            decision: thirdOption
        }
    )

    const m3 = new Choice('This might actually be working', Constants.DEFAULT_TEXT_SPEED, choices);
    const m2 = new Dialogue('narrator', 'This is the second message of the second option', Constants.DEFAULT_TEXT_SPEED, m3);
    const m1 = new Dialogue('narrator', 'This is the second option', Constants.DEFAULT_TEXT_SPEED, m2);

    return m1;

}
export default secondOption;
