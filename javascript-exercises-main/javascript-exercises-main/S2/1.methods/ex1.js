const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",S
];

for (let i = 0; i < products.length; i++) {
  const producto = products[i];

  if (producto.includes("Camiseta")) {
    console.log(producto);
  }
}
