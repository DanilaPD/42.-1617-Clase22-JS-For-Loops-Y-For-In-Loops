// FOR IN LOOP:
//* Con "objetos":

//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in

// "For In" es útil cuando no sabemos cuántos elementos tiene un objeto:

let capitales = {
  Francia: "Paris",
  Italia: "Roma",
  Uruguay: "Montevideo",
};

// Con objetos, no podemos simplemente sacar el largo:

//* console.log(capitales.length);
// No tiene idea cuál es el largo.

//* console.log(capitales);

// Creamos una variable que vamos a usar para recorrer y mostrar los valores:

// No es una regla fija, pero, en general, la variable va a ser la misma palabra en singular o una letra (usualmente la inicial).
for (const capital in capitales) {

  // Conseguir los "keys" (la de la izquierda):
  console.log(capital);

  // Conseguir el "valor" (el de la derecha):
  console.log(capitales[capital]);

  // Acá accedemos a ambos valores:
  console.log(`La capital de ${capital} es ${capitales[capital]}.`);
}
