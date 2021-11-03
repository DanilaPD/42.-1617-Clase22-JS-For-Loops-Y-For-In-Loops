// Mostrar impares:

for (let i = 0; i < 15; i++) {
  console.log("Viene recorriendo: " + i);
  if (i % 2 !== 0) console.log(i);
  // Acá es donde hace el incremento: cuando termina de ejecutar todo. Ahí va a subir a chequear de nuevo.
}

// Bajar en vez de subir:

for (let j = 15; j > 0; j--) {
  if (j % 2 !== 0) console.log(j);
}
