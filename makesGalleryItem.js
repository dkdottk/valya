const setAttributes = (el, attrs) => {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  return el;
};

const addListElement = (el) =>
  setAttributes(el, { className: 'gallery__item' });

const addImage = (el, item) =>
  setAttributes(el, {
    className: 'gallery__image',
    src: item.preview,
    data: item.original,
    alt: item.description,
    width: '340',
  });

const addLink = (el, item) =>
  setAttributes(el, {
    className: 'gallery__link',
    href: item.original,
  });

const createObject = (item) => {
  const liEl = addListElement(document.createElement('li'));
  const imgEl = addImage(document.createElement('img'), item);
  const aEl = addLink(document.createElement('a'), item);

  aEl.appendChild(imgEl);
  liEl.appendChild(aEl);
  liEl.appendChild(document.createElement('li'));

  return liEl;
};

const makesGalleryItem = (items) => items.map((item) => createObject(item));

export default makesGalleryItem;
