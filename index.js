//busca los elementos que tienen los id video y btn del html
const IMAGENES = ["img/mj1.jpg", "img/mj2.jpg","img/mj3.jpg", "img/mj4.jpg", "img/mj5.jpg", "img/mj6.jpg"];
const video = document.getElementById("video"); //representa el <video> de la página
const btn = document.getElementById("btn"); //
let ultimoDisparo = 0;
const sonido = new Audio("sonido.mp3");

//llamado a la acción
btn.onclick = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //le conecta la señal al <video>. srcObject es “la fuente de lo que tiene que mostrar”
  video.srcObject = stream;
  const modelo = await cocoSsd.load();
  detectar(modelo); //llama a la función, se le pasa el modelo para que pueda usarlo
};

async function detectar(modelo) { // modelo es un parámetro
  const resultados = await modelo.detect(video);
  // guarda el true o false en una variable.
  const hayCelular = resultados.some(r => r.class === "cell phone" && r.score > 0.3); 

//si ve el celular y pasan más de 5 segundos arranca de nuevo
  if (hayCelular && Date.now() - ultimoDisparo > 5000) {
    ultimoDisparo = Date.now();
    mostrarImagenes();
  }
// dentro de 300 milisegundos, ejecutá detectar otra vez.
//como detectar se vuelve a llamar a sí misma, se arma un ciclo infinito: mira, espera, mira, espera..
  setTimeout(() => detectar(modelo), 300);
}

function mostrarImagenes() {    // define la función llamada mostrarImagenes
    const ANCHO = 500; // guarda el ancho de cada foto en una variable, para usarlo en varios lugares sin repetir el número
    sonido.currentTime = 0;
    sonido.play(); // vuelve el audio al principio y lo reproduce
    for (let i = 0; i < 8; i++) { //repite lo de adentro 8 veces. i arranca en 0 y sube de a 1
        setTimeout(() => { //un bloque de código para ejecutarse más tarde

        const img = document.createElement("img"); //crea una imagen
        //da un número entre 0 y 1, se multiplica por la cantidad de fotos, y redondea para abajo
        img.src = IMAGENES[Math.floor(Math.random() * IMAGENES.length)];
        img.className = "foto"; // la clase foto para que use los estilos del CSS
        img.style.width = ANCHO + "px";
        // elige una posición al azar. Se resta ANCHO para que la foto no se salga por la derecha o por abajo
        img.style.left = Math.random() * (window.innerWidth - ANCHO) + "px";
        img.style.top = Math.random() * (window.innerHeight - ANCHO) + "px";
        sonido.currentTime = 0;
        sonido.play();
        // la mete en la página y se ve
        document.body.appendChild(img);
        // a los 4 segundos de aparecer, la borra
        setTimeout(() => img.remove(), 4000);
        }, i * 400);
        // cierra el setTimeout y le dice la espera
    }
}