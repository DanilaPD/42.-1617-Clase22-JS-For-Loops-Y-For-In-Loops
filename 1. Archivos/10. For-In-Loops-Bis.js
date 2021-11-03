// FOR IN LOOP:
//* Con "arrays":

const frutas = ["bananas", "manzanas", "frutillas", "uvas"];

for (const f in frutas) {
  // Acá pasa lo mismo... pone la "clave" si mostramos solo el "f":

  console.log(f); // Vamos a ver el "número de índice".

  console.log(frutas[f]); // Con esto,traigo el "valor".
}
