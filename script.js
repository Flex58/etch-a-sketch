const container = document.querySelector("#container");
let gridSize = 20;
let grid = [];
let size =  800;

for (let i = 0; i < gridSize * gridSize; i++){
    grid[i] = container.appendChild(document.createElement("div")); 
    grid[i].style.width = 100 / gridSize  + "%";
    grid[i].style.height = 100 / gridSize  + "%"; 
}

container.style.width =  size + "px";
container.style.height =  size + "px"



