!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.MatchesSelector ||
      function (e) {
        for (
          var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим номер, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('[data-modal-open]'),
    overlay = document.querySelector('[data-modal]'),
    closeButtons = document.querySelectorAll('[data-modal-close]');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', btnModal);
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', btnModal);
  }); // end foreach

  //закрывает модальное окно при нажатии кнопки Escape
  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.key;
      console.log(key);
      if (key == 'Escape') {
        modalElem = document.querySelector('.modal__container.active');
        toggleModal(modalElem);
      }
    },
    false,
  );

  function btnModal(e) {
    e.preventDefault();
    /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal-container
            и будем искать модальное окно с таким же атрибутом. Если атрибут пустой выбираем ближайший. */
    var modalId = this.getAttribute('data-modal-open');
    modalElem = modalId
      ? document.querySelector('[data-modal-container="' + modalId + '"]')
      : this.closest('[data-modal-container]');
    /* После того как нашли нужное модальное окно, добавим или уберём классы
            подложке и окну чтобы показать или скрыть их. */
    toggleModal(modalElem);
  }
  function toggleModal(modalElem) {
    modalElem.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('modal-open');
  }
}); // end ready
