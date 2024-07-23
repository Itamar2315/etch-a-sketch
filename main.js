const homeDivs = [];
const containerDiv = document.querySelector(".container");
createGrid(16);

const restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", () =>{
    let gridProportions = prompt("Enter square grid proportion!")
    while(gridProportions < 1 || gridProportions > 100){
        gridProportions = prompt("Enter a valid square grid proportion! (1-100)")
    }
    createGrid(gridProportions);
});

function createGrid(edgeLength){
    const squareNum = edgeLength * edgeLength;
    const newGridDivs = [];
    const newDivSize = containerDiv.offsetWidth / edgeLength;
    for(let i = 0; i < squareNum; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = newDivSize + "px";
        newDiv.style.height = newDivSize + "px";

        
        newDiv.addEventListener("mouseover", (event) =>{
            if(event.target.style.backgroundColor){
                const currentOpacity = Number(event.target.style.opacity);
                if(currentOpacity < 1){
                    event.target.setAttribute("opacity", currentOpacity + 0.1);
                    event.target.style.opacity = currentOpacity + 0.1;
                }
            }
            else{
                randomDivColor(event);
            }
        });
        newGridDivs.push(newDiv);
    containerDiv.replaceChildren(...newGridDivs);
    }
}

function randomDivColor(event){
    const randomRed = Math.random() * 255;
    const randomGreen = Math.random() * 255;
    const randomBlue = Math.random() * 255;
    event.target.style.backgroundColor = 
    "rgb(" + randomRed + "," + randomGreen + ","
    + randomBlue +")";
    event.target.style.opacity = 0.1;
}
