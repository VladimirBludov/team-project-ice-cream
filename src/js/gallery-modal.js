(() => {
  const refs = {
    openModalBtn: document.querySelector('.gallery__list'),
    closeModalBtn: document.querySelector('.gallery-modal__close'),
    modal: document.querySelector('.gallery-modal'),
  };

  const toggleModalOpen = event => {
    let target = event.target;

    if (target.tagName != 'IMG') return;

    document.querySelector('.gallery-modal__img').src = target.src;

    const isMenuOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    // const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);

    refs.modal.classList.toggle('gallery-modal--is-hidden');
  };

  const toggleModalClose = () => {
    const isMenuOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);

    // const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);

    refs.modal.classList.toggle('gallery-modal--is-hidden');
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModalClose);
})();
