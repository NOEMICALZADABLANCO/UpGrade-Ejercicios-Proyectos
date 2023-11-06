const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

let edad= 18;
for(let i =0; i<users.length; i++){
const elements=users[i];

    if(elements.years<18){
        console.log("Usuario menor de edad:" + elements.name);

    }else {
    console.log("Usuario mayor de edad:" + elements.name);
}
}