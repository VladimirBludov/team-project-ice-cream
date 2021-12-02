(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  console.dir(refs.openModalBtn);

  const toggleModal = event => {
    let target = event.target;

    if (target.classList[0] != 'gallery__item') return; // не на TD? тогда не интересует

    const isMenuOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.modal.classList.toggle('mobile-menu--is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    refs.modal.classList.toggle('modal--is-hidden');
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
})();
