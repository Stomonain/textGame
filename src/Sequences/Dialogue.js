export class Dialogue {
    //this will tell us whether this piece of dialogue will move to the next dialogue piece(dialogue), present the player with a choice(choice),
    //  or initiate a battle(battle)
    type = 'dialogue';

    //the character this dialogue is coming from
    character;

    // the actual content of the dialogue
    text;

    // which box the text should be displayed in
    textBox;

    // the animation that should play with this dialogue
    animation;

    //the speed at which the text should be printed
    textSpeed;

    // the next part of the sequence.  This usually links to another piece of dialogue but can also link to a choice or battle.
    next;


    constructor(character, text, textBox, textSpeed, next) {
        this.character = character;
        this.text = text;
        this.textBox = textBox;
        this.textSpeed = textSpeed;
        this.next = next;
    }
}