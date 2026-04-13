const listaSuperior = [
  "assets/img/Fishstick.png",
  "assets/img/ikonik.png",
  "assets/img/Peely (1).png",
  "assets/img/Marshmello.png"
];

const listaInferior = [
  "assets/img/piernas carburo.png",
  "assets/img/piernas galaxy.png",
  "assets/img/piernas omega.png",
  "assets/img/piernas teknique.png"
];

const superior = document.getElementById("superior");
const inferior = document.getElementById("inferior");
const boton = document.getElementById("boton");
const musica = document.getElementById("musicaLobby");

function generarBestia() {
  const s = Math.floor(Math.random() * listaSuperior.length);
  const i = Math.floor(Math.random() * listaInferior.length);

  superior.src = listaSuperior[s];
  inferior.src = listaInferior[i];
}

boton.addEventListener("click", function() {
  generarBestia();
  
  if (musica.paused) {
    musica.volume = 0.6;
    musica.play().catch(error => console.log("Esperando interacción..."));
  }
});

window.onload = generarBestia;