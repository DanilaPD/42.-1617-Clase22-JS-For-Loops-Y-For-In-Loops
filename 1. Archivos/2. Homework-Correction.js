const evaluarClima = (clima) => {
  switch (true) {
    case clima < 0:
      console.log(`Che, te vas a congelar, hace ${clima}°.`);
      break;
    case clima >= 0 && clima < 10:
      console.log(`Invierno con estos ${clima}°.`);
      break;
    case clima >= 10 && clima < 18:
      console.log(`Está fresquito con estos ${clima}°.`);
      break;
    case clima >= 18 && clima < 27:
      console.log(`Ideal el clima con estos ${clima}°.`);
      break;
    case clima >= 27 && clima < 40:
      console.log(`Calurosa la cosa con estos ${clima}°.`);
      break;
    case clima >= 40:
      console.log(`No salgas, es un horno. Hace ${clima}°.`);
      break;
    default:
      console.log(`Esto con qué se come.`);
  }
};

evaluarClima(40);
evaluarClima("lalala");

//***

const fruta = "gatito";

switch (fruta) {
  case "mango":
    console.log("Es un mango.");
    break;
  case "manzana":
    console.log("Es una manzana.");
    break;
  case "pera":
    console.log("Es una pera.");
    break;
  default:
    console.log("Lo más probable es que sea una verdura.");
}

//***

const cuantosOjos = (alien) => {
  switch (alien) {
    case 0:
      console.log("Miraluka.");
      break;
    case 1:
      console.log("Abyssin.");
      break;
    case 2:
      console.log("Wookie.");
      break;
    case 3:
      console.log("Gran.");
      break;
    case 4:
      console.log("Dyplotids.");
      break;
    default:
      console.log("No sé, pero seguro está en el desierto de Tatooine.");
  }
};

cuantosOjos(3);
