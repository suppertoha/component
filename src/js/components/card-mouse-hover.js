/*CardMouseHover*/

const initCard = () => {
  const cards = document.querySelectorAll('.card');
  if (!cards) return;

  cards.forEach((card) => {
    const cardBottom = card.querySelector('.card__bottom');
    if (!cardBottom) return;

    const cardHeight = cardBottom.querySelector('.price-card').offsetHeight;
    const cardButton = cardBottom.querySelector('.card__button').offsetHeight;

    const priceCard = cardBottom.querySelector('.price-card');
    if (!priceCard) return;

    cardBottom.style.bottom = `-${cardHeight}px`;

    card.addEventListener('mouseover', () => {
      cardBottom.style.position = 'absolute';
      cardBottom.style.bottom = `-${cardHeight + cardButton + 3}px`;
    });

    card.addEventListener('mouseout', () => {
      cardBottom.style.bottom = `-${cardHeight}px`;
    });
  });
};

initCard();

/*End CardMouseHover*/




