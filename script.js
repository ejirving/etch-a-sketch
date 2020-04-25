const container = document.getElementById("container");
const newGrid = document.getElementById("new-grid");
const resetButton = document.getElementById("reset-button");

function makeGrid(rows, cols) {
    //make new grid
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerHTML = c+1;
        cell.addEventListener("mouseover", function(e) {
            event.target.style.background = "black";
        });
        container.appendChild(cell).className = "grid-item";
    };
};

function clearGrid() {
    
}

makeGrid(16, 16);

newGrid.addEventListener("click", function(e) {
    let side = prompt("How many squares should be in the grid?");
    if (side != null || side != '') {
        clearGrid();
        makeGrid(side, side);
    };
});

resetButton.addEventListener("click", function(e) {
    let cells = document.getElementsByClassName("grid-item");
    let size = cells.length;
    for (let i = 0; i < size; i++) {
        let cell = cells[i];
        cell.style.background = "";
    }
});