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


