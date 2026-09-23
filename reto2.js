//TAREAS DEL DIA//
Array //Lista de tareas con su estado de completado//
let tareas = [
    { id: 1, tarea: "Hacer la compra", completada: false },
    { id: 2, tarea: " Estudiar html", completada: true },
    { id: 3, tarea: "Estudiar JavaScript", completada: false },
    { id: 4, tarea: "Hacer ejercicio", completada: false }
];
//Recorrer la lista de tareas y mostrar las tareas pendientes//
let HorasDisponibles = 2;
for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].completada === false) {
        console.log("Tarea pendiente: " + tareas[i].tarea);
    }
}//Evaluar el tiempo disponible y mostrar un mensaje según la cantidad de horas disponibles//
if (HorasDisponibles > 5) {console.log("Dia Tranquilo");}
else if (HorasDisponibles >= 3 && HorasDisponibles <= 5) {console.log("Dia Normal");}
else if (HorasDisponibles < 3) {console.log("Dia Ajustado");}
// Crea una variable nombre con tu nombre y muestra por consola "Hola, " seguido de tu nombre.//
let nombre = "Luis Miguel";
console.log("Hola, " + nombre);
//Averigua qué devuelve 10 % 3 y explica con tus palabras qué hace el operador %//
console.log(10 % 3); // Devuelve 1
// El operador % es el operador de módulo. Devuelve el resto de la división entera entre dos números.
//Comprueba qué devuelve "7" + 1 y qué devuelve "7" - 1. ¿Por qué son distintos?
console.log("7" + 1); // Devuelve "71"
console.log("7" - 1); // Devuelve 6
//Son distientos porque el operador + concatena cadenas de texto, mientras que el operador - convierte la cadena en un número y realiza la resta.
//Comprueba qué devuelve 5 === "5" y qué devuelve 5 == "5". Explica la diferencia.//
console.log(5 === "5"); // Devuelve false
console.log(5 == "5"); // Devuelve true
// La diferencia es que el operador === compara tanto el valor como el tipo de dato, mientras que el operador == solo compara el valor, realizando conversiones de tipo cuando es necesario.
let mensaje = "global";

function saludar() {
  let mensaje = "dentro de la función";
  console.log(mensaje);
}

saludar();
console.log(mensaje);

if (true) {
  let secreto = 42;
}
console.log(secreto);
//que muestra cada console.log y por qué. ¿Qué diferencia hay entre var, let y const?
// El primer console.log dentro de la función saludar() muestra "dentro de la función" porque accede a la variable mensaje declarada dentro de la función. 
// El segundo console.log fuera de la función muestra "global" porque accede a la variable mensaje declarada en el ámbito global.
// El último console.log intenta acceder a la variable secreto, pero genera un error porque secreto fue declarada con let dentro del bloque if y no es accesible fuera de ese bloque.
// La diferencia entre var, let y const es que var tiene un alcance de función o global, mientras que let y const tienen un alcance de bloque. Además, const se utiliza para declarar variables cuyo valor no debe cambiar.
