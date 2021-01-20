function testDom(){
container = document.querySelector("#container");
content = document.createElement( "div");
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

newP = document.createElement( "p");
newP.textContent = "Hey I'm red!";
newP.style.color = "red";
container.appendChild(newP);

newH3 = document.createElement("h3");
newH3.style.color = "blue";
newH3.textContent = "I'm a blue h3!";
container.insertBefore(newH3, content);

finalDiv = document.createElement("div");
finalDiv.style.borderColor = "black";
finalDiv.style.borderWidth = "10px";
finalDiv.style.borderStyle = "solid";
finalDiv.style.backgroundColor = "pink";
fDH1 = document.createElement("h1");
fDH1.textContent = "I'm in a div";
fDP = document.createElement("p");
fDP.textContent = "ME TOO!";
finalDiv.appendChild(fDH1);
finalDiv.appendChild(fDP);
container.appendChild(finalDiv);
}
