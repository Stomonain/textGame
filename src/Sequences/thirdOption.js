import { Dialogue } from './Dialogue';
import { Choice } from './Choice';
import OpeningSequence from './OpeningSequence';
import firstOption from './firstOption';
import secondOption from './secondOption';
import { characterList } from '../Characters/CharacterList';

import Constants from '../Constants';

function thirdOption() {
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
            text: 'Opening',
            decision: OpeningSequence
        }
    )


    const m3 = new Choice(characterList[0], 'Hmmmmm :)', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, choices);
    const m2 = new Dialogue(characterList[0], 'This is the second message of the third option', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, m3);
    const m1 = new Dialogue(characterList[0], 'This is the third option', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, m2);

    return m1;
}

export default thirdOption;
