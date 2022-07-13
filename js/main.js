const container = document.getElementById('container');
const changeGrid = document.getElementById('changeGrid');
let grid = null;

function createGrid(gridSize = 16) {
    for (let i = 0; i<gridSize**2; i++)
    {
        newDiv = document.createElement('div');
        newDiv.id = 'grid';
        newDiv.style.width = 600/gridSize + 'px';
        newDiv.style.height = 600/gridSize + 'px';
        container.appendChild(newDiv);
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