const grid = document.querySelector(".container");
const gridSizeBtn = document.getElementById("grid-btn")

function gridCreation(num) {
    let i = 0;
    while (i < (num * num)) {
        let box = document.createElement("div");
        box.style.width = `calc(960px / ${num} )`;
        box.style.height = `calc(960px / ${num})`;
        grid.appendChild(box);
        i++;
    }
}



document.addEventListener("DOMContentLoaded", () => {
    gridCreation(16)
})

gridSizeBtn.addEventListener("click", () => {
    const gridSize = parseInt(prompt("Enter a number from 1-100 for the grid size"));
    grid.innerHTML = ""

    if(Number.isNaN(gridSize) === true) {
        alert("Please enter a valid number");
    } else if (gridSize < 0 || gridSize > 100) {
        alert("Please enter a number within the range of 1-100");
    } else {
        gridCreation(gridSize);
    }
})