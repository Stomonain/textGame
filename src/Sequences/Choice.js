export class Choice {
    type = 'choice';

    // character giving the decision to the player
    character;

    // the actual content of the dialogue
    text;

    // which textbox the text should appear in
    textBox;

    //the speed at which the text should be printed
    textSpeed;

    // an array containing the potential options the player has
    options;



    constructor(character, text, textBox, textSpeed, options) {
        this.character = character;
        this.text = text;
        this.textBox = textBox;
        this.textSpeed = textSpeed;
        this.options = options;
    }
}