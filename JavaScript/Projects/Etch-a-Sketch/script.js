/* create 16 by 16 grid of square divs */
const container = document.querySelector('.container');
const gridSize = 16;

function createGrid(size) {
    const squareSize = 100 / size; // percentage

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        container.appendChild(square);
    }
}

createGrid(gridSize);


/* Set up a “hover” effect so that the grid divs changes to multiple colors */
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        square.style.backgroundColor = `#${randomColor}`;
    });
});



/* Add a button that resets the grid to its original state */
const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', () => {
    container.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = '';
    });
});



/* Add a button that allows the user to change the size of the grid */
const sizeButton = document.querySelector('.sizeButton');
sizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (1-100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    // Clear the existing grid
    container.innerHTML = '';
    // Create a new grid with the specified size
    createGrid(newSize);
    // Reapply the hover effect to the new squares
    const newSquares = document.querySelectorAll('.square');
    newSquares.forEach(square => {
        square.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            square.style.backgroundColor = `#${randomColor}`;
        });
    });
});

/* Add a button that enables rainbow mode */
const rainbowButton = document.querySelector('.rainbowButton');
let rainbowMode = false;

rainbowButton.addEventListener('click', () => {
    rainbowMode = !rainbowMode;
    if (rainbowMode) {
        rainbowButton.textContent = 'Disable Rainbow Mode';
    } else {
        rainbowButton.textContent = 'Enable Rainbow Mode';
    }
});

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        if (rainbowMode) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            square.style.backgroundColor = `#${randomColor}`;
        }
    });
});

