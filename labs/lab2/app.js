class Instrument {
    constructor (loudness, family, verb) {
        this.loudness=loudness;
        this.family=family;
        this.verb=verb;
    }

    play() {
        console.log(this.family +   ' ' + this.verb + ' at ' + this.loudness + '.');
    }

}

class Woodwind extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness, family, verb)
        this.family='Woodwind';
        this.verb='blows';
    }
}

class Percussion extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness, family, verb)
        this.family='Percussion';
        this.verb='pounds';
    }
}

class Stringed extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness, family, verb)
        this.family='Stringed';
        this.verb='plucks';
    }
}

var flute = new Woodwind("57 hertz");
var drum = new Percussion("10 hertz");
var harp = new Stringed("3 hertz");
var instruments = [flute, drum, harp];

instruments.forEach(
    function(instrument) {
    instrument.play();
});