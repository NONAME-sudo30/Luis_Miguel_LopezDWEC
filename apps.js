
const videojuegos = [
  {
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    compania: "Nintendo",
    plataforma: "Nintendo Switch",
    valoracion: 9.6,
    precio: 59.99
  },
  {
    nombre: "Elden Ring",
    compania: "FromSoftware",
    plataforma: "PC",
    valoracion: 9.5,
    precio: 49.99
  },
  {
    nombre: "God of War Ragnarök",
    compania: "Santa Monica Studio",
    plataforma: "PlayStation 5",
    valoracion: 9.4,
    precio: 69.99
  },
  {
    nombre: "Hollow Knight",
    compania: "Team Cherry",
    plataforma: "PC",
    valoracion: 9.0,
    precio: 14.99
  },
  {
    nombre: "Forza Horizon 5",
    compania: "Playground Games",
    plataforma: "Xbox Series X",
    valoracion: 9.2,
    precio: 39.99
  },
  {
    nombre: "Stardew Valley",
    compania: "ConcernedApe",
    plataforma: "PC",
    valoracion: 8.9,
    precio: 13.99
  }
];


const cuerpoTabla = document.getElementById("cuerpoTabla");
for (const videojuego of videojuegos) {
  const fila = document.createElement("tr");

  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = videojuego.nombre;

  const celdaCompania = document.createElement("td");
  celdaCompania.textContent = videojuego.compania;

  const celdaPlataforma = document.createElement("td");
  celdaPlataforma.textContent = videojuego.plataforma;

  const celdaValoracion = document.createElement("td");
  celdaValoracion.textContent = videojuego.valoracion.toFixed(1);

  const celdaPrecio = document.createElement("td");
  celdaPrecio.textContent = videojuego.precio.toFixed(2) + " €";

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaCompania);
  fila.appendChild(celdaPlataforma);
  fila.appendChild(celdaValoracion);
  fila.appendChild(celdaPrecio);

 
  cuerpoTabla.appendChild(fila);
}


// cambia arriba el precio o la valoración de cualquier juego, guarda y recarga.
// La tabla cambia sin haber tocado ni una línea de index.html.