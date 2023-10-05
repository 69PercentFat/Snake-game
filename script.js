const snake = document.getElementById("snake");
const food = document.getElementById("food");

let snakeX = 2;
let snakeY = 2;
let foodX = 10;
let foodY = 10;
let grid = 20;
let snakeXSpeed = 0;
let snakeYSpeed = 0;
let tailLength = 0;
let tail = [];

function gameLoop() {
    snakeX += snakeXSpeed;
    snakeY += snakeYSpeed;

    // Check for collision with food
    if (snakeX === foodX && snakeY === foodY) {
        tailLength++;
        foodX = Math.floor(Math.random() * grid);
        foodY = Math.floor(Math.random() * grid);
    }

    // Update the snake's tail
    tail.unshift({ x: snakeX, y: snakeY });
    if (tail.length > tailLength) {
        tail.pop();
    }

    // Check for collision with the wall or itself
    if (snakeX < 0 || snakeX >= grid || snakeY < 0 || snakeY >= grid) {
        clearInterval(game);
        alert("Game over! Your score: " + tailLength);
    }

    for (let i = 0; i < tail.length; i++) {
        if (tail[i].x === snakeX && tail[i].y === snakeY) {
            clearInterval(game);
            alert("Game over! Your score: " + tailLength);
        }
    }

    // Update the snake's position
    snake.style.left = snakeX * 20 + "px";
    snake.style.top = snakeY * 20 + "px";

    // Update the food's position
    food.style.left = foodX * 20 + "px";
    food.style.top = foodY * 20 + "px";
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            snakeXSpeed = 0;
            snakeYSpeed = -1;
            break;
        case "ArrowDown":
            snakeXSpeed = 0;
            snakeYSpeed = 1;
            break;
        case "ArrowLeft":
            snakeXSpeed = -1;
            snakeYSpeed = 0;
            break;
        case "ArrowRight":
            snakeXSpeed = 1;
            snakeYSpeed = 0;
            break;
    }
});

const game = setInterval(gameLoop, 100);
