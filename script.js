const container = document.querySelector("#container");
let gridSize = 5;
let grid = [];
let size = 100;

for (let i = 0; i < gridSize * gridSize; i++){
    grid[i] = container.appendChild(document.createElement("div"));  
}

for (let i = 0; i < gridSize * gridSize; i++){
   grid[i].style.width = size + "px";
   grid[i].style.height = size + "px";
} 

container.style.width = gridSize * size + "px";
container.style.height = gridSize * size + "px"



