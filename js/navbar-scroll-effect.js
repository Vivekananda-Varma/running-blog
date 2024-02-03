document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var header = document.querySelector('.header');
      if (window.scrollY > 56) {
        header.classList.remove('bg-transparent');
      } else {
        header.classList.add('bg-transparent');
      }
    });
  });