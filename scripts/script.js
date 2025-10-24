<<<<<<< HEAD

  const pages = document.querySelectorAll(".carousel_page");
  const upBtn = document.querySelector(".up_btn");
  const downBtn = document.querySelector(".down_btn");
  let current = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.add("hidden");
      page.classList.remove("active");
      if (i === index) {
        page.classList.remove("hidden");
        // Force reflow for smooth animation restart
        void page.offsetWidth;
        page.classList.add("active");
      }
    });
  }

  upBtn.addEventListener("click", () => {
    current = (current - 1 + pages.length) % pages.length;
    showPage(current);
  });

  downBtn.addEventListener("click", () => {
    current = (current + 1) % pages.length;
    showPage(current);
  });

  // Initialize
  showPage(current);
=======
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
>>>>>>> c13b050fb4142898ecdbf3fba0d0fe4cb1efade7

