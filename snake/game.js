import {draw as drawSnake, update as updateSnake, grow, dead} from "./snake.js"
import {generateFood, draw as drawFood, onSnake} from "./food.js"

let lastTime = 0;
let food = generateFood();
let x = food.x, y = food.y;

function main(currentTime) {
    if (currentTime-lastTime >= 250) {
        lastTime = currentTime;

        let div = document.querySelectorAll("div");
        div[0].innerHTML = "";

        if (dead()) {
            alert("sorry, you lose");
            return;
        }

        if (onSnake(x, y)) {
            grow(x, y);
            drawSnake();
            food = generateFood(x, y);
            x = food.x;
            y = food.y;
        }
        drawFood(x, y);

        updateSnake();
        drawSnake();
    }
    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);