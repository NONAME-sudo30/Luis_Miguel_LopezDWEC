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
});
