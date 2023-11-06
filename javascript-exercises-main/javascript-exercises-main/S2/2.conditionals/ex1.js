



const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i = 0; i < alumns.length; i++) {
  let alumnos=alumns[i];
  if((alumnos.T1 && alumnos.T2==true) || 
  (alumnos.T2 && alumnos.T3==true) || 
  (alumnos.T1 && alumnos.T3==true)) {
    alumnos.condicion="Está aprovado";

} else {
    alumnos.condicion="Está suspenso";
}
console.log(alumnos);
}
