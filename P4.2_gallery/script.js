// Elementos del modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementById("close");

// Selecciona todas las imágenes de la galería
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {

    // Abrir el modal
    modal.style.display = "flex";

    // Obtener el nombre base de la imagen (sin ruta ni tamaño)
    // Ejemplo: images/small/amanecer-1x.jpg → amanecer
    const filename = img.src.split("/").pop(); // amanecer-1x.jpg
    const base = filename.split("-")[0];       // amanecer

    // Cargar la imagen en máxima resolución
    modalImg.src = `images/xlarge/${base}-2x.jpg`;

    // Pasar el texto alternativo
    modalText.textContent = img.alt;
  });
});

// Cerrar modal cuando se pulsa la X
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Cerrar modal haciendo clic fuera de la imagen
modal.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
