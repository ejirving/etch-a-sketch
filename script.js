const container = document.getElementById("container");
const newGrid = document.getElementById("new-grid");
const resetButton = document.getElementById("reset-button");
const heading = document.querySelector('.header');

function makeGrid(rows, cols) {
    //make new grid
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", function(e) {
            event.target.style.background = "black";
        });
        container.appendChild(cell).className = "grid-item";
    };
};

function clearGrid() {
    container.innerHTML = "";
}

makeGrid(100, 100);

newGrid.addEventListener("click", function(e) {
    let side = prompt("How many squares should be in the grid?");
    if (side > 100 || side <= 0 || side === null || side === '') {
        alert("Please enter a number between 1 and 100.");
    } else {
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