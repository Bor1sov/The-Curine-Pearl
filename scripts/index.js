const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-bubble");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

const modal = document.getElementById("request-modal");
const requestBtn = document.getElementById("request-btn");
const sliderRequestBtn = document.getElementById("slider-request-btn");
const closeModal = document.getElementById("close-modal");

requestBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

if (sliderRequestBtn) {
  sliderRequestBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const form = document.getElementById("request-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  modal.style.display = "none";
  form.reset();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });

      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slides-container");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const slideCount = slides.length;
  let autoSlide;

  function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  nextBtn.addEventListener("click", function () {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", function () {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      stopAutoSlide();
      currentIndex = parseInt(this.getAttribute("data-index"));
      updateSlider();
      startAutoSlide();
    });
  });

  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", function () {
    stopAutoSlide();
  });

  slider.addEventListener("mouseleave", function () {
    startAutoSlide();
  });

  startAutoSlide();
});
