const gridContainer = document.getElementById('gridContainer');
const changeGrid = document.getElementById('changeGrid');
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
            event.target.style.backgroundColor = '#'+ randomColor();
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