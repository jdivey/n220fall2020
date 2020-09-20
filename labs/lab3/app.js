class VendingMachine {
    constructor(firstCandy, secondCandy, firstChips) {
        this.firstCandy=firstCandy;
        this.firstCandyCount=10;
        this.secondCandy=secondCandy;
        this.secondCandyCount=10;
        this.firstChips=firstChips;
        this.firstChipsCount=10;
    }

    buyFirstCandy() {
        if(this.firstCandyCount > 0) {
            this.firstCandyCount --;
        }
    }

    buySecondCandy() {
        if(this.secondCandyCount > 0) {
            this.secondCandyCount --;
        }
    }

    buyFirstChips() {
        if(this.firstChipsCount > 0) {
            this.firstChipsCount --;
        }
    }

    render() {
        return `
        <div>#1: ${this.firstCandy}</div>
        <div>Stock: ${this.firstCandyCount}</div>
        <br>
        <div>#2: ${this.secondCandy}</div>
        <div>Stock: ${this.secondCandyCount}</div>
        <br>
        <div>#3: ${this.firstChips}</div>
        <div>Stock: ${this.firstChipsCount}</div>
        <br>`;

    }
}

let vendingmac = new VendingMachine("Skittles", "Butterfingers", "Doritos");
let vendingdiv = document.getElementById("vendingdiv");
vendingdiv.innerHTML = vendingmac.render();

function buyCandyOne() {
    vendingmac.buyFirstCandy();
    vendingdiv.innerHTML = vendingmac.render();

}

function buyCandyTwo() {
    vendingmac.buySecondCandy();
    vendingdiv.innerHTML = vendingmac.render();
}

function buyChipsOne() {
    vendingmac.buyFirstChips();
    vendingdiv.innerHTML = vendingmac.render();
}

console.log(vendingmac);