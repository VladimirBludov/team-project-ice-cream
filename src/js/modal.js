(() => {
  const refs = {
    openModalBtn: document.querySelector('.about__btn'),
    closeModalBtn: document.querySelector('.read__modal-close'),
    modalAbout: document.querySelector('.read__modal'),
    body: document.querySelector('html'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isMenuOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    refs.body.classList.toggle('disable-scroll');
    refs.modalAbout.classList.toggle('is-open');
  }
})();
