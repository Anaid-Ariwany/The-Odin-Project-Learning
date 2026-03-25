/* create 16 by 16 grid of square divs */
const container = document.querySelector('.container');
const gridSize = 16;
function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
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



