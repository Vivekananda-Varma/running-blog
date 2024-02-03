
  const navEl = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 56) {
      navEl.classList.add('navbar-scrolled')
    } else if (window.scrollY < 56) {
      navEl.classList.remove('navbar-scrolled')
    }
  })