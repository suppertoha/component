/*Text-dropdown*/

const initText = () => {
  const texts = document.querySelectorAll('.js-text');
  if (!texts) return;
  texts.forEach((text) => {
    const textContent = text.querySelector('.js-text__content');
    const textButton = text.querySelector('.js-text__more-button');
    const openingText = textButton.dataset.openingText;
    const closingText = textButton.dataset.closingText;
    let isExpanded = false;

    textButton.addEventListener('click', () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        textContent.style.maxHeight = textContent.scrollHeight + 'px';
        textButton.innerText = closingText;
        textContent.classList.add('active')
      } else {
        textContent.style.maxHeight = '46px';
        textButton.innerText = openingText;
        textContent.classList.remove('active')
      }
    });
  });
};

initText();

/*End Text-dropdown*/
