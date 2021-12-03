(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modalAbout: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modalAbout.classList.toggle('visually-hidden');
    }
})();


(() => {
     const refs = {
         openModalBtn: document.querySelector('[data-modal-open]'),
         closeModalBtn: document.querySelector('[data-modal-close]'),
         modalAbout: document.querySelector('[modal]'),
     };

     refs.openModalBtn.addEventListener('click', toggleModal);
     refs.closeModalBtn.addEventListener('click', toggleModal);

     function toggleModal() {
         refs.modalAbout.classList.toggle('visually-hidden');
     }
 })();