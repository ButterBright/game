import {getSegments} from "./snake.js"

let x, y;

export function generateFood() {
    do {
        x = Math.floor(Math.random()*20)+1;
        y = Math.floor(Math.random()*20)+1;
    } while(onSnake(x, y));

    return {x: x, y: y};
}

export function draw(x, y) {
    let div = document.createElement("div");
    div.classList.add("food");
    let gameBoard = document.getElementById("game-board");
    gameBoard.appendChild(div);
    div.style.gridRowStart = y;
    div.style.gridColumnStart = x;
}

export function onSnake(x, y) {
    let segments = getSegments();
    return segments.some(element => {
        if (element.x == x && element.y == y)
            return true;
        else
            return false;
    })
}