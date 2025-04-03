// нужно сделать чтобы только на десктопе скрипт отрабатывал

const extraServices = document.querySelectorAll(".extra__item");
const extraShowcase = document.querySelector(".showcase__bg");

function changeShowcaseImage(i) {
  extraShowcase.style.backgroundImage = `url('/dianacome/assets/extra-services-${i + 1}.jpg')`;
}

for (const [i, service] of extraServices.entries()) {
  service.addEventListener("mouseover", () => changeShowcaseImage(i));
  service.addEventListener("focusin", () => changeShowcaseImage(i));
}
