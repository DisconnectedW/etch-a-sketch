const grid = document.querySelector(".container");
const sketchModes = document.getElementById("sketch-modes")

const sketchTypes = document.querySelectorAll(`#sketch-modes input[type="radio"]`)

const gridSizeBtn = document.getElementById("grid-btn");
const sketchMode = document.getElementById("mode-btn");
const colorMode = document.getElementById("color-btn");
const resetBtn = document.getElementById("reset-btn");

const isDisabled = true;

function gridCreation(num) {
    let i = 0;
    while (i < (num * num)) {
        let box = document.createElement("div");
        box.style.width = `calc(960px / ${num} )`;
        box.style.height = `calc(960px / ${num})`;
        box.classList.add("grid-box");
        grid.appendChild(box);
        i++;
    }

    const boxes = grid.querySelectorAll(".grid-box")
    console.log(boxes)

    document.addEventListener("change", () => {
        if (sketchTypes[0].checked === true) {
            boxes.forEach(box => {
            box.addEventListener("mousedown", (e) => {
                    e.target.style.backgroundColor = 
                    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                })
            })
        } else if (sketchTypes[1].checked === true) {
            boxes.forEach(box => {
            box.addEventListener("mouseenter", (e) => {
                    e.target.style.backgroundColor = 
                    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                })
            })
        }
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

sketchMode.addEventListener("click", () => {
    sketchModes.classList.toggle("hidden");
})

sketchTypes.forEach(type => {
    type.addEventListener("input", () => {
        sketchModes.classList.toggle("hidden")
    })
})
