
const body$$ = document.querySelector("body");
const div$$ = document.querySelector(".container");
const input$$ = document.createElement("input");
const pokedex = document.querySelector('#pokedex');
let resultado = []

const obtenerPokemones = async () => {
  for (let i = 1; i <= 150; i++) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    const dato = await respuesta.json();
    resultado.push(dato);
  }
  const info = resultado.map((item) => ({
    name: item.name,
    image: item.sprites["front_default"],
    type: item.types.map((type) => type.type.name).join(", "),
    id: item.id
    
  }));


  
  
  return info;
};



const pintPokemon = (pokeMap) => {
  div$$.innerHTML = "";
  for (const item of pokeMap) {
    const divPokemon = document.createElement("div");
    divPokemon.innerHTML = `
      <h2>${item.name}</h2>
      <img src="${item.image}" alt="${item.name}">
      <p>${item.type}</p>`;
    div$$.appendChild(divPokemon);
  }
  console.log(pokeMap)
};


const drawInput = (pokeMap) => {
  input$$.addEventListener("input", () =>
    searchCharacters(input$$.value, pokeMap)
  );
};

const searchCharacters = (filtro, characters) => {
  let filteredCharacters = characters.filter((item) =>
    item.name.toLowerCase().includes(filtro.toLowerCase())
  );
  pintPokemon(filteredCharacters);
};

const init = async () => {
  const characters = await obtenerPokemones();
  pintPokemon(characters);
  drawInput(characters);
};

init();
