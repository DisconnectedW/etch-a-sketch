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