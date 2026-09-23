// Muestra por consola los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Muestra por consola los números pares del 1 al 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Dada la lista ["manzana", "pera", "plátano"], recórrela y muestra cada fruta.
const frutas = ["manzana", "pera", "plátano"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
//Pide un número (puedes fijarlo en una variable) y muestra su tabla de multiplicar del 1 al 10.
const numero = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}