const homeDivs = [];
const containerDiv = document.querySelector(".container");
for(let i = 0; i < 16; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add('homeDivs');
    newDiv.textContent = "Boy number " + i;
    containerDiv.appendChild(newDiv);
}