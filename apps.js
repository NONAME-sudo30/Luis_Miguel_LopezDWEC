console.log("¡Hola DWEC! Mi taller ya funciona.");  
// Recuperar elementos por su id
const boton = document.getElementById("boton");
const aviso = document.getElementById("aviso");

// Variable contador
let contador = 0;

// Escuchar el clic en el botón
boton.addEventListener("click", () => {
    contador++;
    aviso.textContent = `Has hecho clic ${contador} veces`;
    
});
const modonoche = document.getElementById("modonoche");

modonoche.addEventListener("click", () => {
  document.body.classList.toggle("tema-claro");

  if (document.body.classList.contains("tema-claro")) {
    boton.textContent = "☀️";
  } else {
    boton.textContent = "🌙";
  }
 
const juegos = [
  {
    id: "fila1",
    nombre: "Borderlands 4",
    compañia: "Gearbox Software",
    plataforma: "PC",
    valoracion: 9.0,
    precio: 29.99
  },
  {
    id: "fila2",
    nombre: "FC 27",
    compañia: "EA Sports",
    plataforma: "PS5",
    valoracion: 8.0,
    precio: 100
  },
  {
    id: "fila3",
    nombre: "Elden Ring",
    compañia: "FromSoftware",
    plataforma: "PC",
    valoracion: 9.0,
    precio: 59.99
  },
  {
    id: "fila4",
    nombre: "Hollow Knight: Silksong",
    compañia: "Team Cherry",
    plataforma: "PC",
    valoracion: 9.5,
    precio: 20
  },
  {
    id: "fila5",
    nombre: "Persona 5",
    compañia: "Atlus",
    plataforma: "PS5, PC",
    valoracion: 9.0,
    precio: 50
  }
];

});
