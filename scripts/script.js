
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

