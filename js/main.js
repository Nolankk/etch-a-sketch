const gridContainer = document.getElementById('gridContainer');
const changeGrid = document.getElementById('changeGrid');
const rainbow = document.getElementById('rainbow');
const black = document.getElementById('black');
const eraser = document.getElementById('eraser');
let grid = null;
function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function createGrid(gridSize = 16) {
    for (let i = 0; i<gridSize**2; i++)
    {
        newDiv = document.createElement('div');
        newDiv.id = 'grid';
        newDiv.style.width = 600/gridSize + 'px';
        newDiv.style.height = 600/gridSize + 'px';
        gridContainer.appendChild(newDiv);
    }
    const grid = document.querySelectorAll('#grid');
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'black';
        });
    });
    return grid;
}

grid = createGrid();

function removeGrid(grid) {
    grid.forEach(item => {
        item.remove();
    });
}

changeGrid.onclick = function() {
    let gridSize = prompt('How large should the grid be (?x?)?');

    if (gridSize > 100) {
        gridSize = prompt('How large should the grid be (?x?)?');
    }

    removeGrid(grid);
    grid = createGrid(gridSize);
}

black.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = black;
        });
    });
}

rainbow.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = '#'+ randomColor();
        });
    });
}

eraser.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'white';
        });
    });
}