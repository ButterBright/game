import {getInput} from "./input.js"
import {onSnake} from "./food.js"

const segments = [
    {x: 11, y: 11}
];

export function draw() {
    segments.forEach(element => {
        let snakeBody = document.createElement('div');
        snakeBody.style.gridRowStart = element.y;
        snakeBody.style.gridColumnStart = element.x;
        snakeBody.classList.add("snake");
        let gameBoard = document.getElementById("game-board");
        gameBoard.appendChild(snakeBody);
    });
}

export function update() {
    if (!(getInput().x == 0 && getInput().y == 0)) 
        for (var i = segments.length-1; i >= 1; i--) {
            segments[i] = {...segments[i-1]};
        }
    segments[0].x += getInput().x;
    segments[0].y += getInput().y;
}

export function grow(x, y) {
    if (onSnake(x, y)) {
        segments.unshift({x: x, y: y});
    }
    console.log(segments[0], segments[1]);
}

export function dead() {
    let head = segments[0];
    if (head.x <= 0 || head.x >= 21 || head.y <= 0 || head.y >= 21)
        return true;
    return segments.slice(1, segments.length).some(element => {
        if (element.x == head.x && element.y == head.y) 
            return true;
        else
            return false;
    })
}

export function getSegments() {
    return segments;
}