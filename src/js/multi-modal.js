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

/* идея в том чтобы назначать кнопке открытия атрибут с номером data-modal-open="1"
и назначать модальному окну атрибут data-modal-container="1"с таким же номером, 
открытие модалки происходит добавлением класса .active */
document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку. */
  var modalButtons = document.querySelectorAll('[data-modal-open]'),
    overlay = document.querySelector('[data-modal]'),
    closeButtons = document.querySelectorAll('[data-modal-close]');

  /* Перебираем массивы кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', btnModal);
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', btnModal);
  }); // end foreach

  function btnModal(e) {
    e.preventDefault();
    /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal-open
            и будем искать модальное окно с таким же номером. Если атрибут пустой, значит
            мы нажали на кнопку закрыть и выбираем модальное окно в котором она расположена. */
    var modalId = this.getAttribute('data-modal-open');
    removePrevModal(e);
    /* После того как нашли нужное модальное окно, добавим или уберём классы
        подложке и окну чтобы показать или скрыть их. */
    if (modalId) {
      modalElem = document.querySelector('[data-modal-container="' + modalId + '"]');
      addModal(modalElem);
    } else {
      modalElem = this.closest('[data-modal-container]');
      removeModal(modalElem);
    }
    function addModal(modalElem) {
      modalElem.classList.add('active');
      overlay.classList.add('active');
      document.querySelector('html').classList.add('disable-scroll');
    }
    function removeModal(modalElem) {
      modalElem.classList.remove('active');
      overlay.classList.remove('active');
      document.querySelector('html').classList.remove('disable-scroll');
    }
    function removePrevModal(e) {
      var modalContainers = document.querySelectorAll('[data-modal-container]');
      modalContainers.forEach(function (container) {
        if (container.contains(e.target)) {
          removeModal(container);
        }
      });
    }
    /* закрывает модальное окно при нажатии кнопки Escape */
    document.body.addEventListener(
      'keyup',
      function (e) {
        var key = e.key;
        if (key == 'Escape') {
          modalElem = document.querySelector('.modal__container.active');
          removeModal(modalElem);
        }
      },
      false,
    );
  }
}); // end ready
