const gridContainer = document.getElementById('gridContainer');
const changeGrid = document.getElementById('changeGrid');
const rainbow = document.getElementById('rainbow');
const black = document.getElementById('black');
const eraser = document.getElementById('eraser');
let grid = null;
function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

// Creates a grid with size 'gridSize' and adds 'mouseover' eventListener
// to all grid squares that changes backgroundColor when triggered
function createGrid(gridSize = 16) {
    for (let i = 0; i<gridSize**2; i++)
    {
        newDiv = document.createElement('div');
        newDiv.id = 'grid';
        newDiv.style.width = 600/gridSize + 'px';
        newDiv.style.height = 600/gridSize + 'px';
        gridContainer.appendChild(newDiv);
    }
    // Add eventListener 'mouseover' to all grid squares
    const grid = document.querySelectorAll('#grid');
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'black';
        });
    });
    return grid;
}

// Creates initial grid
grid = createGrid();

// Removes a grid 'grid'
function removeGrid(grid) {
    grid.forEach(item => {
        item.remove();
    });
}

// Prompts user for grid size then calls removeGrid() and createGrid()
// to make a new grid
changeGrid.onclick = function() {
    let gridSize = prompt('How large should the grid be (?x?)?');

    if (gridSize > 100) {
        gridSize = prompt('How large should the grid be (?x?)?');
    }

    removeGrid(grid);
    grid = createGrid(gridSize);
}

// When 'Black' button is clicked, change eventListener backgroundColor to black
black.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'black';
        });
    });
}

// When 'Rainbow' button is clicked, change eventListener backgroundColor to rainbow
rainbow.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = '#'+ randomColor();
        });
    });
}

// When 'Eraser' button is clicked, change eventListener backgroundColor to white
eraser.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'white';
        });
    });
}