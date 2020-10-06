const cellElem = document.querySelectorAll("[cell]")
const board = document.getElementsByClassName("board")[0]
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],
]
let res = document.getElementById("res")

cellElem.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true })
})

let turn = "circle"

function handleClick(e) {
    // draw mark
    const cell = e.target
    cell.classList.add(turn)
    // check result
    if (checkWin()) {
        alert(`${turn} wins`)
        endGame()
    }
    if (checkDraw()) {
        alert("Draw")
        endGame()
    }
    // swap turn
    if (turn == "x") turn = "circle"
    else turn = "x"
    // change board class
    board.classList.remove("x")
    board.classList.remove("circle")
    board.classList.add(turn)
}

function checkWin() {
    return winningCombination.some((combination) => {
        return combination.every((index) => {
            return cellElem[index].classList.contains(turn)
        })
    })
}

function checkDraw() {
    return [...cellElem].every((cell) => {
        return (
            cell.classList.contains("x") ||
            cell.classList.contains("circle")
        )
    })
}

function endGame() {
    board.classList.remove("x")
    board.classList.add("circle")
    cellElem.forEach(cell => {
        cell.classList.remove("x")
        cell.classList.remove("circle")
        cell.addEventListener("click", handleClick, { once: true })
    })
}
