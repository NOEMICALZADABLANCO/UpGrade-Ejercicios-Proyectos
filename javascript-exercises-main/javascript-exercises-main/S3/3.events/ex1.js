const button$$=document.createElement("button");
button$$.textContent="Soy Botón";
document.body.appendChild(button$$);

button$$.addEventListener("click", function(){console.log("click")});