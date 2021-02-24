let food = { x: 5, y: 18 };
const EXPANSION_RATE = 1;

const updateFood = () => {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
        console.log('on food');
        // image(1);
    }
}

const drawFood = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add(image());
    gameBoard.appendChild(foodElement);
}

const foodUpdate = () => {
    num = 0
    
}
const image = () => {
    const foodImage = ['foodMama', 'foodSeth', 'foodSydney', 'foodSteph', 'foodMama'];
    let snek = snakeBody.length;
    if (snek === 3) {
        i = 0;
    } else if (snek % 4 === 0) {
        console.log('dby4')
        i = 1;
    } else if ((snek + 3) % 4 === 0) {
        console.log('index2')
        i = 2; 
    } else if ((snek + 2) % 4 === 0) {
        console.log('p2d4')
        i = 3;
    } else if ((snek + 1) % 4 === 0) {
        console.log('me')
        i = 4;
    };
    console.log(i)
    return foodImage[i]
}

const getRandomFoodPosition = () => {
    let randomFoodPosition = randomGridPosition();
    while (onSnake(randomFoodPosition)) {
        randomFoodPosition = randomGridPosition();
    }
    return randomFoodPosition;
} 