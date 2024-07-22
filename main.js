const homeDivs = [];
const containerDiv = document.querySelector(".container");
for(let i = 0; i < 256; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add('homeDivs');
    newDiv.textContent = "Boy number " + i;
    newDiv.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = "white";
    });
    newDiv.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "red";
    });

    containerDiv.appendChild(newDiv);
}


function hoverDiv(){
    
}