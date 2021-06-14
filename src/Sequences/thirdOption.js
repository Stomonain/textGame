import { Dialogue } from './Dialogue';
import { Choice } from './Choice';

import Constants from '../Constants';


var m3 = new Choice('Hmmmmm :)', Constants.DEFAULT_TEXT_SPEED, null);
var m2 = new Dialogue('narrator', 'This is the second message of the third option', Constants.DEFAULT_TEXT_SPEED, m3);
var thirdOption = new Dialogue('narrator', 'This is the third option', Constants.DEFAULT_TEXT_SPEED, m2);

export default thirdOption;
