let imageSF = document.querySelectorAll('.trip-image');
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');

function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

for (var i = 0; i < imageSF.length; i++) {
  imageSF[i].addEventListener('click', openModal);
}

backdrop.onclick = closeModal;