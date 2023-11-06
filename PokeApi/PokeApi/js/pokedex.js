
const body$$ = document.querySelector("body");
const div$$ = document.querySelector(".container");
const input$$ = document.createElement("input");
const pokedex = document.querySelector('#pokedex');
let dataPokemon = []

const obtenerPokemones = async () => {
  let resultado = [];
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

  dataPokemon = info;
  
  console.log(resultado);
  return info;
};

const filterType = (nuestroFiltro) => {
  let filter = nuestroFiltro;
  const filterData = dataPokemon.filter(data => {
    return data.type.includes(filter)
  }) 
  pintPokemon(filterData);

}


const searchType = (event) => {
  let types = event.target.value;
  const filterData = dataPokemon.filter(data => {
    return data.name.includes(types)
  }) 
  pintPokemon(filterData);
}

// document.querySelector("#search").addEventListener('change', searchType);

const pintPokemon = (pokeMap) => {
  div$$.innerHTML = "";
  for (const item of pokeMap) {
    const divPokemon = document.createElement("div");
    divPokemon.innerHTML = `
      <h2 class="h2_title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}">
      <p>${item.type}</p>`;

    divPokemon.classList.add("cards");
    div$$.appendChild(divPokemon);
  }
  console.log(pokeMap)
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
};

init();
