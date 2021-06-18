import { Dialogue } from './Dialogue';
import { Choice } from './Choice';
import { characterList } from '../Characters/CharacterList';

import secondOption from './secondOption';
import thirdOption from './thirdOption';
import Constants from '../Constants';
import OpeningSequence from './OpeningSequence';

function firstOption() {
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

    const m3 = new Choice(characterList[3], 'Did you want anything else?', 'dialogTextBox', Constants.DEFAULT_TEXT_SPEED, choices);
    const m2 = new Dialogue(characterList[3], 'My text should be purple', 'dialogTextBox', Constants.DEFAULT_TEXT_SPEED, m3);
    const m1 = new Dialogue(characterList[3], 'Hi, my name is Palaya', 'dialogTextBox',  Constants.DEFAULT_TEXT_SPEED, m2);

    return m1;

}
export default firstOption;
