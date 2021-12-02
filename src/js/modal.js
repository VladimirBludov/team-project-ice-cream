(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  const toggleModalOpen = event => {
    let target = event.target;

    if (target.tagName != 'IMG') return;

    const isMenuOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.modal.classList.toggle('mobile-menu--is-open');

    // const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);

    refs.modal.classList.toggle('modal--is-hidden');
  };

  const toggleModalClose = () => {
    const isMenuOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.modal.classList.toggle('mobile-menu--is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    refs.modal.classList.toggle('modal--is-hidden');
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModalClose);
})();
