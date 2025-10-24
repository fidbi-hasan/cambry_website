document.addEventListener('DOMContentLoaded', () => {
  const upBtn = document.querySelector('.up_btn');
  const downBtn = document.querySelector('.down_btn');
  const carousel1 = document.querySelector('.carousel_content_1');
  const carousel2 = document.querySelector('.carousel_content_2');

  // Slide up to carousel 2
  upBtn.addEventListener('click', () => {
    if (!carousel2.classList.contains('hidden')) return; // already visible
    carousel1.classList.add('slide-up');
    setTimeout(() => {
      carousel1.classList.add('hidden');
      carousel1.classList.remove('slide-up');
      carousel2.classList.remove('hidden');
      carousel2.classList.add('slide-down');
      setTimeout(() => carousel2.classList.remove('slide-down'), 500);
    }, 400);
  });

  // Slide down to carousel 1
  downBtn.addEventListener('click', () => {
    if (!carousel1.classList.contains('hidden')) return; // already visible
    carousel2.classList.add('slide-down');
    setTimeout(() => {
      carousel2.classList.add('hidden');
      carousel2.classList.remove('slide-down');
      carousel1.classList.remove('hidden');
      carousel1.classList.add('slide-up');
      setTimeout(() => carousel1.classList.remove('slide-up'), 500);
    }, 400);
  });
});
