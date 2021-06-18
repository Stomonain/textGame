import { Dialogue } from './Dialogue';
import { Choice } from './Choice';
import { characterList } from '../Characters/CharacterList';

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

    const m3 = new Choice(characterList[0], 'This might actually be working', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, choices);
    const m2 = new Dialogue(characterList[0], 'This is the second message of the second option', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, m3);
    const m1 = new Dialogue(characterList[0], 'This is the second option', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, m2);

    return m1;

}
export default secondOption;
