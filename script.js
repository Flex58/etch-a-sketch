const container = document.querySelector("#container");
const generate = document.querySelector("#generate");
let gridSize;
let grid = [];
const SIZE =  800;
let gridSquare;
drawGrid()
 
function drawGrid(){
    for (let i = 0; i < gridSize * gridSize; i++){
        grid[i] = container.appendChild(document.createElement("div")); 
        grid[i].style.width = 100 / gridSize  + "%";
        grid[i].style.height = 100 / gridSize  + "%"; 
        grid[i].setAttribute("class", "gridSquare");
     }
     gridSquare = document.querySelectorAll(".gridSquare");
     gridSquare.forEach((div) => {
        div.style.opacity = 1;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = document.querySelector("#color-select").value;
            if (document.querySelector("#color-select").value != ""){
                div.style.opacity -= 0.1;
            }
        })
    })
    }

container.style.width =  SIZE + "px";
container.style.height =  SIZE + "px"




generate.addEventListener("click", () =>{
    for (let i = 0; i < gridSize * gridSize; i++){
        container.removeChild(grid[i]);
    }
    container.style.backgroundColor = "black";
    do gridSize = prompt("Enter your Grid Size (cant exceed 100): ")
    while (gridSize > 100)
    drawGrid()
})