const container = document.querySelector("#container");
let gridSize = 50;
let grid = [];
const SIZE =  800;
drawGrid()
const gridSquare = document.querySelectorAll(".gridSquare");
 
function drawGrid(){
    for (let i = 0; i < gridSize * gridSize; i++){
        grid[i] = container.appendChild(document.createElement("div")); 
        grid[i].style.width = 100 / gridSize  + "%";
        grid[i].style.height = 100 / gridSize  + "%"; 
        grid[i].setAttribute("class", "gridSquare")
     }
}

container.style.width =  SIZE + "px";
container.style.height =  SIZE + "px"


gridSquare.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "green";
        console.log("test");
    })
})