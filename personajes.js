//nombre (texto), nivel (número), vida (número), esJefe (verdadero/falso) y habilidades (una lista con al menos tres).
let personajes = [
  {
    nombre: "Shiraori",
    nivel: 1000,
    vida: 100000000,
    esJefe: true,
    habilidades: ["Control del tiempo", "Manipulación de la realidad", "Teletransportación", "Inmortalidad", "Ojo malvado exterminador s"]
  }
]
//Muestra por consola cada dato con un mensaje descriptivo.

console.log("Nombre del personaje: " + personajes[0].nombre);
console.log("Nivel del personaje: " + personajes[0].nivel);
console.log("Vida del personaje: " + personajes[0].vida);
console.log("Es jefe: " + personajes[0].esJefe);
console.log("Habilidades del personaje: " + personajes[0].habilidades.join(", "));

//Comprueba el tipo de cada variable usando typeof y muéstralo por consola.

console.log("Tipo de nombre: " + typeof personajes[0].nombre);
console.log("Tipo de nivel: " + typeof personajes[0].nivel);
console.log("Tipo de vida: " + typeof personajes[0].vida);
console.log("Tipo de esJefe: " + typeof personajes[0].esJefe);
console.log("Tipo de habilidades: " + typeof personajes[0].habilidades);
