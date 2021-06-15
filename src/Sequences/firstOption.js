import { Dialogue } from './Dialogue';
import { Choice } from './Choice';

import secondOption from './secondOption';
import thirdOption from './thirdOption';
import Constants from '../Constants';
import OpeningSequence from './OpeningSequence';

function firstOption() {
    console.log('running first option');
    var choices = new Array(
        {
            text: 'Opening',
            decision: OpeningSequence
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

    const m3 = new Choice('Oh yes, oh yes yes yes', Constants.DEFAULT_TEXT_SPEED, choices);
    const m2 = new Dialogue('narrator', 'This is the second message of the first option', Constants.DEFAULT_TEXT_SPEED, m3);
    const m1 = new Dialogue('narrator', 'This is the first option', Constants.DEFAULT_TEXT_SPEED, m2);

    return m1;

}
export default firstOption;
