document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  const banner = document.getElementById("banner");

  const dotsContainer = banner.querySelector(".dots");
  const leftArrow = banner.querySelector(".arrow_left");
  const rightArrow = banner.querySelector(".arrow_right");

  let activeSlide = 0;

  // Creation de points pour chaque element du tableau  
  slides.forEach((_, index) => {   // "_" sert de placeholder, c'est standard sur JS
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => { // Rend intéractifs et clickable les points
      activeSlide = index;
      showSlide();
      updateDots();
    });
  });
// Permet d'ajouter le point du slide actif 
  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      if (index === activeSlide) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
    });
  }
  function showSlide() {
    const images = banner.querySelectorAll(".banner-img");
    const text = banner.querySelectorAll("p");
    const slideData = slides[activeSlide];
    images.forEach((image) => {
      image.src = `./assets/images/slideshow/${slides[activeSlide].image}`;
    });
    text.forEach((paragraph) => {
      paragraph.innerHTML = slideData.tagLine;
    });
  }

  // Initial slide
  showSlide();
  updateDots();

  leftArrow.addEventListener("click", () => {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    showSlide();
    updateDots();
  });

  rightArrow.addEventListener("click", () => {
    activeSlide = (activeSlide + 1) % slides.length;
    showSlide();
    updateDots();
  });
});
