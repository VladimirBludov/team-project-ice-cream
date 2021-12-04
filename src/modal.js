(() => {
    const refs = {
        openModalBtn: document.querySelector('.about__btn'),
        closeModalBtn: document.querySelector('.read__modal-close'),
        modalAbout: document.querySelector('.read__modal'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modalAbout.classList.toggle('visually-hidden');
    }
})();
