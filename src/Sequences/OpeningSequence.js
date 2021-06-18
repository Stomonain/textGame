import { Dialogue } from './Dialogue';
import { Choice } from './Choice';
import { characterList } from '../Characters/CharacterList';

import firstOption from './firstOption';
import secondOption from './secondOption';
import thirdOption from './thirdOption';

import Constants from '../Constants';

function OpeningSequence() {
    var choices = new Array(
        {
            text: 'Palaya',
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
    const m3 = new Choice(characterList[0], 'What will you choose?', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, choices);
    const m2 = new Dialogue(characterList[0], 'This is the second message', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, m3);
    const m1 = new Dialogue(characterList[0], 'This is the text of the dialogue', 'narrationTextBox', Constants.DEFAULT_TEXT_SPEED, m2);

    return m1;
}
export default OpeningSequence;