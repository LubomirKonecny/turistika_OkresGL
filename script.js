const overlay = document.getElementById("background-overlay");

const backgroundImages = {
  "label-city1": "./images/Gelnica_Kostol_Nanebovzatia_Panny_Marie.jpg",
  "label-city2": "./images/Prakovce_dedina.jpg",
  "label-city3": "./images/Helcmanovce.jpg",
  "label-city4": "./images/img_mnisek.jpg",
};

let currentImage = null;

document.querySelectorAll(".map-label").forEach((label) => {
  label.addEventListener("mouseenter", () => {
    const imageUrl = backgroundImages[label.classList[1]];
    if (!imageUrl) return;

    const img = document.createElement("img");
    img.src = imageUrl;
    overlay.appendChild(img);

    // Prechod na nový obrázok
    requestAnimationFrame(() => {
      img.classList.add("active");
    });

    // Odstráni predchádzajúci obrázok po prechode
    if (currentImage) {
      currentImage.classList.remove("active");
      setTimeout(() => {
        if (currentImage.parentElement === overlay) {
          overlay.removeChild(currentImage);
        }
      }, 800); // musí ladiť s transition dĺžkou
    }

    currentImage = img;
  });

  label.addEventListener("mouseleave", () => {
    if (currentImage) {
      currentImage.classList.remove("active");
      setTimeout(() => {
        if (currentImage.parentElement === overlay) {
          overlay.removeChild(currentImage);
        }
        currentImage = null;
      }, 800);
    }
  });
});
