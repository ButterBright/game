let input = {x: 0, y: 0};
let lastDirection = {x:0, y:0};

window.addEventListener("keydown", event => {
    if (event.key == "ArrowUp" && lastDirection.y != 1) {
        input.x = 0;
        input.y = -1;
        lastDirection.x = 0;
        lastDirection.y = -1;
    } else if (event.key == "ArrowDown" && lastDirection.y != -1) {
        input.x = 0;
        input.y = 1;
        lastDirection.x = 0;
        lastDirection.y = 1;
    } else if (event.key == "ArrowLeft" && lastDirection.x != 1) {
        input.x = -1;
        input.y = 0;
        lastDirection.x = 1;
        lastDirection.y = 0;
    } else if (event.key == "ArrowRight" && lastDirection.x != -1) {
        input.x = 1;
        input.y = 0;
        lastDirection.x = 1;
        lastDirection.y = 0;
    }
})

export function getInput() {
    return input;
}