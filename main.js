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

function createGrid(proportionNum){
    const amount = proportionNum * proportionNum;
    const newGridDivs = [];
    const newDivSize = containerDiv.offsetWidth / proportionNum;
    for(let i = 0; i < amount; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = newDivSize + "px";
        newDiv.style.height = newDivSize + "px";

        
        newDiv.addEventListener("mouseover", (event) =>{
            event.target.style.backgroundColor = "black";
        });
        newDiv.addEventListener("mouseleave", (event) => {
            const random = Math.random();
            const randomColor = Math.round((0xffffff * random)).toString(16);
            event.target.style.backgroundColor = "#" + randomColor;
            
        });
        newGridDivs.push(newDiv);
    containerDiv.replaceChildren(...newGridDivs);
    }
}

