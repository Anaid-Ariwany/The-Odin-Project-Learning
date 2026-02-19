//new p
let newP = document.createElement('p');
newP.textContent = "Hey I'm red!";
container.appendChild(newP);

//new h3
let newH3 = document.createElement('h3');
newH3.textContent = "I'm a blue h3!";
container.appendChild(newH3);

//new div
let newDiv = document.createElement('div');
newDiv.style.border = "1px solid black";
newDiv.style.backgroundColor = "pink";

let newH1 = document.createElement('h1');
newH1.textContent = "I'm in a div";
newDiv.appendChild(newH1);

let newP2 = document.createElement('p');
newP2.textContent = "ME TOO!";
newDiv.appendChild(newP2);

container.appendChild(newDiv);




