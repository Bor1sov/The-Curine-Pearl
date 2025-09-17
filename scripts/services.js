document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const accordionContent = button.nextElementSibling;
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== accordionContent && item.classList.contains("active")) {
        item.classList.remove("active");
        item.previousElementSibling.querySelector(
          ".accordion-icon"
        ).textContent = "+";
      }
    });
    accordionContent.classList.toggle("active");
    const icon = button.querySelector(".accordion-icon");
    icon.textContent = accordionContent.classList.contains("active")
      ? "−"
      : "+";
  });
});

const modalcard = document.getElementById("request-modal");
const requestBtnCard = document.getElementById("request-btn");
const closeModalCard = document.getElementById("close-modal");
const serviceRequestBtns = document.querySelectorAll(".service-request-btn");
const serviceSelect = document.getElementById("service");

requestBtnCard.addEventListener("click", () => {
  modalcard.style.display = "block";
});

closeModalCard.addEventListener("click", () => {
  modalcard.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modalcard.style.display = "none";
  }
});

serviceRequestBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceName = btn.getAttribute("data-service");
    modalcard.style.display = "block";
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text === serviceName) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  });
});

document
  .getElementById("request-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    modalcard.style.display = "none";
    this.reset();
  });
