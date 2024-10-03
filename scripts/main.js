const nextButton = document.querySelector('.js-carousel-arrow-icon--left');
const track = document.querySelector('.js-carousel__track');
const currentSlide = track.querySelector('.js-current-slide');
console.log(currentSlide);
console.log(currentSlide.nextElementSibling);

nextButton.addEventListener('click', e => {
  console.log('clicked');
  track.style.transform = 'translateX(-150px)'
})