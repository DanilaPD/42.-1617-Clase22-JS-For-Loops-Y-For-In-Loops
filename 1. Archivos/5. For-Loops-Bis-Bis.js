let i = 1;

// Puede no declararse uno de los "valores", pero debe dividirse con un ; el lugar donde cada uno iría.

// La "i" ya existe, entonces puedo dejar ese espacio vacío y completar solo los otros. El incremento puedo hacerlo con +=, -=, *=, etc.

for (; i < 20; i += 3) {
  console.log(i);
}

// Podés querer que haya varias condiciones o que primero ejecute y luego corte, o que no corte nunca (por qué harías eso), etc.
for (let j = 0; ; j += 2) {
  console.log("j = ", j);
  if (j > 10) {
    break;
  }
}

// Podríamos hacer el incremento adentro:
const num = 25;

for (let k = 0; k < num; ) {
  k += 2; // Con esto, se va a pasar uno porque incrementa, imprime y recién ahí chequea.
  console.log("k = ", k);
}

// Modo pesdilla:
let l = 1; // Primer término.

for (;;) {
  if (l > 10) break; // Segundo término.
  console.log("l = ", l); // Acción.
  l += 2; // Tercer término - Incremento.
}

// Sería igual a:
for (let m = 1; m < 10; m += 2) {
  console.log("m = ", m);
}
