// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ella, es una chica Ligth", time: 28 },
  { text: "Y tiene un tatuaje en la piel y una Buena Familia", time: 37},
  { text: "Tiene un novio espacial", time: 43 },
  { text: "Le dice que lo ama", time: 50 },
  { text: "pero ella no ama a nadie", time: 52 },
  { text: "Miren, Mirenla Bien, ella es Tan linda", time: 56 },
  { text: "Ella es tan free, tan free", time: 66 },
  { text: "Miren, Mirenla bien, ella es tan linda", time: 71 },
  { text: "Ella es tan freeee", time: 80 },
  { text: "Ella es una chica Ligth", time: 100 },
  { text: "Tiene un amigo frances", time: 109 },
  { text: "Y Tiene el pelo negro", time: 111 },
  { text: "Ella , q siempre huele Bien", time: 117 },
  { text: "y Siempre esta bronceada", time: 122 },
  { text: "y siempre esta drogada", time: 126 },
  { text: "Miren, Mirenla Bien , Ella es tan Linda", time: 131 },
  { text: "Ella es tan freeeeeeeeeeee", time: 139 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);