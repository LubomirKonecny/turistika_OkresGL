document.addEventListener("DOMContentLoaded", function () {
    const labels = document.querySelectorAll(".map-label");
    const body = document.body;
  
    // Uložíme pôvodné pozadie
    const originalBackground = body.style.backgroundImage;
  
    // Mapovanie triedy na nový obrázok
    const backgroundImages = {
      "label-city1": "url('./images/Gelnica_Kostol_Nanebovzatia_Panny_Marie.jpg')",
      "label-city2": "url('./images/Prakovce-snp-2.jpg')",
    };
  
    labels.forEach((label) => {
      label.addEventListener("mouseenter", () => {
        const labelClass = Array.from(label.classList).find((cls) =>
          cls.startsWith("label-city")
        );
        if (labelClass && backgroundImages[labelClass]) {
          body.style.backgroundImage = backgroundImages[labelClass];
        }
      });
  
      label.addEventListener("mouseleave", () => {
        body.style.backgroundImage = originalBackground;
      });
    });
  });
  