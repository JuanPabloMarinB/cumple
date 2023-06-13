const boton = document.querySelector(".main-button");

function ocultarBoton() {
  boton.style.display = "none";
}
/*
function crearGlobo() {
  const balloonContainer = document.getElementById("balloon-container");
  balloonContainer.style.display = "block";
  const balloon = document.createElement("img");
  balloon.src = "../Images/globo.png";
  balloon.className = "balloon balloon-red rise";
  balloon.style.position = "absolute";
  balloon.style.bottom = 0;
  balloon.style.left = 0;
  balloonContainer.appendChild(balloon);
}

boton.addEventListener("click", () => {
  ocultarBoton();
  crearGlobo();
});
*/
function createBalloons() {
  const mensaje = document.getElementById("mensaje");
  const mensajeLargo = document.getElementById("mensajeLargo");
  const balloonContainer = document.getElementById("balloon-container");
  const colors = ["red", "orange", "pink", "cyan", "green", "blue", "purple"];
  let balloonCount = 0;

  const balloonInterval = setInterval(() => {
    if (balloonCount >= 200) {
      clearInterval(balloonInterval);
      return;
    }

    if (balloonCount == 30) {
      mensaje.style.display = "block";
      mensaje.style.opacity = "1";
    }
    if (balloonCount == 50) {
      mensajeLargo.style.display = "block";
      mensajeLargo.style.opacity = "1";
    }

    balloonContainer.style.display = "block";

    const balloon = document.createElement("img");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.position = "absolute";
    balloon.src = "../Images/globo.png";
    balloon.className = "balloon " + "balloon-" + randomColor + " rise";

    // Asignar posición inicial aleatoria en la parte inferior
    const randomLeftPosition = Math.random() * 90;
    balloon.style.bottom = 0;
    balloon.style.left = `${randomLeftPosition}%`;

    balloonContainer.appendChild(balloon);
    balloonCount++;
  }, 300);
}

boton.addEventListener("click", () => {
  ocultarBoton();
  createBalloons();
});
