
const div$$=document.querySelectorAll("div");

const p$$=document.createElement("p");

p$$.textContent='Voy en medio!';

document.body.insertBefore(p$$,div$$[1]);
