const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '메뉴 닫기' : '메뉴 열기';
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '메뉴 열기';
}));
document.querySelectorAll('.play').forEach(button => button.addEventListener('click', () => {
  const playing = button.getAttribute('aria-pressed') !== 'true';
  const picture = button.closest('figure').querySelector('.image-open img');
  const key = `${button.dataset.image}.${playing ? 'gif' : 'jpg'}`;
  picture.src = typeof embeddedMedia !== 'undefined' ? embeddedMedia[key] : `assets/${key}`;
  button.setAttribute('aria-pressed', String(playing));
  button.textContent = playing ? 'Ⅱ 정지 그림으로 보기' : '▶ 움직이는 그림 보기';
}));
const dialog = document.querySelector('#lightbox');
const dialogImage = document.querySelector('#dialog-image');
document.querySelectorAll('.image-open').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#dialog-title').textContent = button.dataset.title;
  dialogImage.src = button.querySelector('img').src;
  dialogImage.alt = button.querySelector('img').alt;
  dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog && (event.clientX < dialog.getBoundingClientRect().left || event.clientX > dialog.getBoundingClientRect().right || event.clientY < dialog.getBoundingClientRect().top || event.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
dialog.addEventListener('close', () => dialogImage.removeAttribute('src'));
