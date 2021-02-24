let food = { x: 5, y: 18 };
const EXPANSION_RATE = 1;

const updateFood = () => {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

const drawFood = (gameBoard) => {
    const foodImages = ['foodMama', 'foodSeth', 'foodSydney', 'foodSteph']
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    for (i=0; i < 4; i++) {
        foodElement.classList.add(foodImages[i]);
    }
    gameBoard.appendChild(foodElement);
}

const getRandomFoodPosition = () => {
    let randomFoodPosition = randomGridPosition();
    while (onSnake(randomFoodPosition)) {
        randomFoodPosition = randomGridPosition();
    }
    return randomFoodPosition;
} 