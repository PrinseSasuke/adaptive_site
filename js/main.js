let slider = tns({
    container: '.slider-blog',
    items: 1,
    controlsContainer: '#controls',
    prevButton: '.btn-blog--prev',
    nextButton: '.btn-blog--next',
    nav:false,
    startIndex: 1
  });

const dots = document.querySelectorAll('.dots_blog');
console.log(dots);
dots[1].classList.add('dots__item--active')
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach((otherDot) => {
      //otherDot.classList.remove('dots__item--active');
    });
    slider.goTo(index);
    //dot.classList.add('dots__item--active')
  })
});
slider.events.on('indexChanged', (info) => {
  console.log(info.index);
  dots.forEach((dot, index) => {
      if (index === info.index - 1) {
          dot.classList.add('dots__item--active');
      }
      else{
        dot.classList.remove('dots__item--active');
      }
  });
});

const accordionButtons = document.querySelectorAll(".faq-accordeon__item-trigger");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const arrowImage = button.querySelector(".accordion-button-arrow img");
    content.classList.toggle("opened");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrowImage.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      arrowImage.style.transform = "rotate(90deg)";
    }
  });
});