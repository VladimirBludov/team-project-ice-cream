const btn=document.querySelector('.scroll__up')

window.addEventListener('scroll', showButtonUp);
btn.addEventListener('click', onButtonUpClick);

function showButtonUp() {
  if (pageYOffset < document.documentElement.clientHeight) {
    btn.classList.add('visually-hidden');
  } else {
    btn.classList.remove('visually-hidden');
  }
}

function onButtonUpClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  console.log('')
}