// document.getElementById('card-single').addEventListener('mouseover', () => {
//   document.getElementById('card-single').classList.add('hidden');
//   document.getElementById('card-single-hover').classList.remove('hidden');
// })

// document.getElementById('card-single').addEventListener('mouseleave', () => {
//   document.getElementById('card-single').classList.remove('hidden');
//   document.getElementById('card-single-hover').classList.add('hidden');
// })

// const singleCards = document.querySelectorAll('.card-single');

// singleCards.forEach((singleCard) => {
//   singleCard.addEventListener('mouseover', () => {
//     singleCard.classList.add('hidden');
//   })
// })

const cardWrappers = document.querySelectorAll('.card-wrapper');

cardWrappers.forEach((wrapper) => {
  const normalCard = wrapper.querySelector('.card-single');
  const hoverCard = wrapper.querySelector('.card-single-hover');

  wrapper.addEventListener('mouseenter', () => {
    normalCard.classList.add('hidden');
    hoverCard.classList.remove('hidden');
  });

  wrapper.addEventListener('mouseleave', () => {
    normalCard.classList.remove('hidden');
    hoverCard.classList.add('hidden');
  });
});

