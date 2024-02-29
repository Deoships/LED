let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const indicatorsContainer = document.querySelector('.indicators');

showSlides();

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides() {
  if (slideIndex > totalSlides - 3) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = totalSlides - 3;
  }

  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 33.33}%)`;

  updateIndicators();
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    if (index === slideIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

for (let i = 0; i < totalSlides - 2; i++) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  indicator.textContent = i + 1;
  indicator.addEventListener('click', function () {
    slideIndex = i;
    showSlides();
  });
  indicatorsContainer.appendChild(indicator);
}

showSlides();
