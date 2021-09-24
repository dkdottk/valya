function addIsOpenToLightbox(imageInfo) {
  const image = document.querySelector('.lightbox__image');
  image.src = imageInfo.data;
  image.alt = imageInfo.alt;

  document.querySelector('.js-lightbox').classList.add('is-open');
}

export function onClickHandler(e) {
  e.preventDefault();

  addIsOpenToLightbox(e.target);
}

function removeLightBox() {
  document.querySelector('.lightbox__image').src = '';
  document.querySelector('.js-lightbox').classList.remove('is-open');
}

export function onCloseHandler(e) {
  e.preventDefault();

  removeLightBox();
}

export function onPushEsc(e) {
  e.preventDefault();

  if (e.keyCode === 27) {
    removeLightBox();
  }
}
