document.addEventListener('DOMContentLoaded', function () {
  const modalContainers = document.querySelectorAll('[data-modal-container]');
  modalContainers.forEach(function (container) {
    container.classList.add('modal__transition');
  });
  document.querySelector('.read__modal').classList.add('modal__transition');
});
