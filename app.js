import galleryItems from './items.js';
import makesGalleryItem from './makesGalleryItem.js';
import {
  onClickHandler,
  onCloseHandler,
  onPushEsc,
} from './onClickOnPicture.js';

const gallery = document.querySelector('.js-gallery');

const items = makesGalleryItem(galleryItems);
gallery.append(...items);

gallery.addEventListener('click', onClickHandler);

document
  .querySelector('[data-action="close-lightbox"]')
  .addEventListener('click', onCloseHandler);

document
  .querySelector('.lightbox__overlay')
  .addEventListener('click', onCloseHandler);

document.addEventListener('keydown', onPushEsc);
