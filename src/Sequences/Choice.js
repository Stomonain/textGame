export class Choice {
    type = 'choice';

    // the actual content of the dialogue
    text;

    //the speed at which the text should be printed
    textSpeed;

    // an array containing the potential options the player has
    options;

    constructor(text, textSpeed, options) {
        this.text = text;
        this.textSpeed = textSpeed;
        this.options = options;
    }
}