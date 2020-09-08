class Instrument {
    constructor (loudness, family, verb) {
        this.loudness=loudness;
        this.family=family;
        this.verb=verb;
    }

    play() {
        console.log(this.family +   ' ' + this.verb + ' at ' + this.loudness);
    }

}

var music1 = new Instrument("10 hertz", "Woodwinds", "vibrate");

music1.play();