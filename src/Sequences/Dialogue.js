export class Dialogue {
    //this will tell us whether this piece of dialogue will move to the next dialogue piece(dialogue), present the player with a choice(choice),
    //  or initiate a battle(battle)
    type = 'dialogue';

    //the character this dialogue is coming from.  narrator is seperate from other dialogue
    character;

    // the actual content of the dialogue
    text;

    // the animation that should play with this dialogue
    animation;

    //the speed at which the text should be printed
    textSpeed;

    // the next part of the sequence.  This usually links to another piece of dialogue but can also link to a choice or battle.
    next;

    constructor(character, text, textSpeed, next) {
        this.character = character;
        this.text = text;
        this.textSpeed = textSpeed;
        this.next = next;
    }
}