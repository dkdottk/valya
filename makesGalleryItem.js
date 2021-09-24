const addListElement = () => {
  const liEl = document.createElement('li');
  liEl.className = 'gallery__item';
  return liEl;
};

const addImage = (item) => {
  const imgEl = document.createElement('img');
  imgEl.className = 'gallery__image';
  imgEl.src = item.preview;
  imgEl.data = item.original;
  imgEl.alt = item.description;
  imgEl.width = '340';
  return imgEl;
};

const addLink = (item) => {
  const aEl = document.createElement('a');
  aEl.className = 'gallery__link';
  aEl.href = item.original;
  return aEl;
};

export const makesGalleryItem = (items) => {
  return items.map((item) => {
    const liEl = addListElement();
    const imgEl = addImage(item);
    const aEl = addLink(item);

    aEl.appendChild(imgEl);
    liEl.appendChild(aEl);
    liEl.appendChild(document.createElement('li'));

    return liEl;
  });
};
