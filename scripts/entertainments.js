        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-bubble");
        const navLinks = document.querySelectorAll(".nav-links li");

        burger.addEventListener("click", () => {
          nav.classList.toggle("nav-active");
          burger.classList.toggle("toggle");
        });

        const modal = document.getElementById("request-modal");
        const requestBtn = document.getElementById("request-btn");
        const closeModal = document.getElementById("close-modal");

        requestBtn.addEventListener("click", () => {
          modal.style.display = "flex";
        });

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

        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        let slideInterval;

        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            slider.style.transform = `translateX(-${index * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            
            currentSlide = index;
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function startSlider() {
            slideInterval = setInterval(nextSlide, 4000); 
        }

        function stopSlider() {
            clearInterval(slideInterval);
        }

        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-index'));
                goToSlide(slideIndex);
                stopSlider();
                startSlider();
            });
        });

        startSlider();

        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', stopSlider);
        sliderContainer.addEventListener('mouseleave', startSlider);