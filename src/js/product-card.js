document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку. */
  var modalButtons = document.querySelectorAll('.product-card__button');

  /* Перебираем массивы кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', btnProduct);
  }); // end foreach

  function btnProduct(e) {
    e.preventDefault();

    /* Находим карточку продукта которой принадлежит кнопка */
    var productCard = document.querySelectorAll('.product-card');
    /* Перебираем массив карточек */
    productCard.forEach(function (card) {
      if (card.contains(e.target)) {
        /* После того как нашли нужную карточку заполним модальное окно */
        fillModal(card);
      }
    }); // end foreach
  }
  function fillModal(card) {
    console.log(card);
  }
}); // end ready
