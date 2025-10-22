const grid = document.querySelector(".container");

const gridSizeBtn = document.getElementById("grid-btn");
const randomBtn = document.getElementById("random-btn");
const colorInput = document. getElementById("color-picker")
const resetBtn = document.getElementById("reset-btn");

let isRandom = false;
let color = '#000'

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

    boxes.forEach(box => {
        box.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = isRandom ? 
                `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                : color;
                e.target.style.opacity = e.target.style.opacity ? Number(e.target.style.opacity) + 0.1 : 0.1;
            })
        })
}



function show() {
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
}

resetBtn.addEventListener("click", () => {
    grid.innerHTML = "";
    color = "#000"
    gridCreation(16);
})

randomBtn.addEventListener("click", () => {
    isRandom = !isRandom;
})

colorInput. addEventListener("input", () => {
    color = colorInput.value;
})

show()