class Grid {

}

class Xmark {
    drawX() {

    }
}

class Omark {

}

let recOne = document.getElementById("recOne");
recOne.addEventListener("click", drawX);
function drawX(event) {
    event.target.background(color, [a])
}

drawFrame();

function drawFrame() {
    requestAnimationFrame(drawFrame);
}