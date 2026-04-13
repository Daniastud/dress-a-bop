const listaSuperior = [
  "assets/img/Fishstick.png",
  "assets/img/ikonik.png",
  "assets/img/Peely (1).png",
  "assets/img/Marshmello.png",
  "assets/img/Skull Trooper.png",
  "assets/img/TheGrefg.png",
  "assets/img/Peely Bone.png"
];

const listaInferior = [
  "assets/img/piernas carburo.png",
  "assets/img/piernas galaxy.png",
  "assets/img/piernas omega.png",
  "assets/img/piernas teknique.png",
  "assets/img/Piernas Peely (1).png",
  "assets/img/Piernas Skull Trooper.png",
  "assets/img/Piernas TheGrefg.png"
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

boton.addEventListener("click", () => {
  generarBestia();

  if (musica.paused) {
    musica.volume = 0.5;
    musica.play();
  }
});

window.onload = generarBestia;

let nombre = prompt("¿Cómo tú te llamas? Yo no sé");
//alert(`Hola, ${nombre}`);
console.log(nombre);


generarBestia();