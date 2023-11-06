const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

var peliculaPequeña = [];
var peliculaMediana = [];
var peliculaGrande = [];

for (let i = 0; i < movies.length; i++) {
  const pelis = movies[i];

  if (pelis.durationInMinutes < 100) {
    peliculaPequeña.push(pelis);
  }
  if (pelis.durationInMinutes >= 100 && pelis.durationInMinutes < 200) {
    peliculaMediana.push(pelis);
  }
  if (pelis.durationInMinutes > 200) {
    peliculaGrande.push(pelis);
  }
}

console.log(peliculaPequeña);
console.log(peliculaMediana);
console.log(peliculaGrande);
