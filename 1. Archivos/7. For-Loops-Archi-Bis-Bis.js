const palabra = "cosa";

// Al recorrer, nos va a mostrar la letra en esa posición.
for (let i = 0; i < palabra.length; i++) {
  const element = palabra[i];
  console.log(element);
}

//*

// Usando esto para un "array", accedemos al elemento en esa posición:
const juegos = ["Doom", "Civ", "Worns"];

for (let j = 0; j < juegos.length; j++) {
  const element = juegos[j];
  console.log(element);
}

//*

// Cortando la ejecución:
for (let goles = 0; goles < 10; goles += 2) {
  if (goles === 7) {
    console.log("No se puede hacer 7 goles, es ilegal.");
    break;
  }
  // Ni siquiera nos imprime esto:
  console.log("Cantidad de goles: ", goles);
}
