export class Character {
    id;
    name;

    baseCon;
    baseStr;
    baseInt;
    baseAtr;
    baseWil;

    strMod;
    intMod;
    conMod;
    atrMod;
    wilMod;

    textColor;
    defaultTextSpeed;
    fontStyle;
    currentTextBox;

    location;
    enabled;
    level;
    exp;

    constructor(id, name, str, int, con, atr, wil, color, textSpeed, style, level) {
        this.id = id;
        this.name = name;

        this.baseStr = str;
        this.baseInt = int;
        this.baseCon = con;
        this.baseAtr = atr;
        this.baseWil = wil;

        this.strMod = 0;
        this.intMod = 0;
        this.conMod = 0;
        this.atrMod = 0;
        this.wilMod = 0;

        this.textColor = color;
        this.defaultTextSpeed = textSpeed;
        this.fontStyle = style;
        this.currentTextBox = 'null';

        this.location = 'void';
        this.enabled = true;
        this.level = level;
        this.exp = 0;
    }

    get strenth() {
        return this.baseStr + this.strMod;
    }

    get intelligence() {
        return this.baseInt + this.intMod;
    }

    get constitution() {
        return this.baseCon + this.conMod;
    }

    get attraction() {
        return this.baseAtr + this.atrMod;
    }

    get will() {
        return this.baseWil + this.wilMod;
    }

}