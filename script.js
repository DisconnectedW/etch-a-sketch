const grid = document.querySelector(".container");
const gridSizeBtn = document.getElementById("grid-btn");
const clickMode = document.getElementById("click-btn");
const dragMode = document.getElementById("drag-btn");
const resetBtn = document.getElementById("reset-btn")
const isDisabled = true;

function gridCreation(num) {
    let i = 0;
    while (i < (num * num)) {
        let box = document.createElement("div");
        box.style.minWidth = `calc(960px / ${num} )`;
        box.style.minHeight = `calc(960px / ${num})`;
        box.classList.add("grid-box");
        grid.appendChild(box);
        i++;
    }

    const boxes = grid.querySelectorAll(".grid-box")
    console.log(boxes)

    boxes.forEach(box => {
            box.addEventListener("mousedown", (e) => {
            e.target.style.backgroundColor = "#000"
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    gridCreation(16);
    
    gridSizeBtn.addEventListener("click", () => {
    const gridSize = parseInt(prompt("Enter a number from 1-100 for the grid size"));
    grid.innerHTML = ""

    if(Number.isNaN(gridSize) === true) {
        alert("Please enter a valid number");
        gridCreation(16);
    } else if (gridSize < 0 || gridSize > 100) {
        alert("Please enter a number within the range of 1-100");
        gridCreation(16);
    } else {
        gridCreation(gridSize);
    }
})
})

resetBtn.addEventListener("click", () => {
    grid.innerHTML = "";
    gridCreation(16);
})




