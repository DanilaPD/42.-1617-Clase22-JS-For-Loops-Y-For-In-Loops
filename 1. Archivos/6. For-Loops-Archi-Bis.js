//* https://desarrolloweb.com/articulos/619.php

// Vamos a anidar:

//El de "afuera" va más lento, el de "adentro" va más rápido.
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i = ", i, " j = ", j);
    // Solo va a volver al de afuera cuando el de adentro sea "false". Mientras que el de adentro dé "true", va a seguir recorriendo ese.
  }
}

//Este no anda, lo vamos a terminar la próxima clase:

//* const persona = {
//*  ojos: 2,
//*  orejas: 2,
//*  dedos: {
//*    mano: 10,
//*    pie: 10,
//*  },
//* };

//* for (let i = 0; i < persona.length; i++) {
//*  for (let j = 0; j < dedos.length; j++) {
//*    const element = dedos[j];
//*    console.log(element);
//*  }
//*  const element = persona[1]:
//*  console.log(element)
//* }
