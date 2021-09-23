const galleryItems = [
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const elem = document.querySelector('.js-gallery')

const makesGalleryItems = items => {
    return items.map(item => {

        const liEl = document.createElement('li');
        liEl.className = 'gallery__item';

        const aEl = document.createElement('a');
        aEl.className = 'gallery__link';
        aEl.href = item.original;

        const imgEl = document.createElement('img');
        imgEl.className = 'gallery__image';
        imgEl.src = item.preview;
        imgEl.data = item.original;
        imgEl.alt = item.description;
        imgEl.width = '340';

        aEl.appendChild(imgEl);
        liEl.appendChild(aEl);
        liEl.appendChild(document.createElement('li'));
        return liEl;
    });
};

const items = makesGalleryItems(galleryItems);
elem.append(...items);

function addIsOpenToLightbox(imageInfo) {
    const image = document.querySelector('.lightbox__image');
    image.src = imageInfo.data;
    image.alt = imageInfo.alt;

    document.querySelector('.js-lightbox').classList.add('is-open');
}

function onClickHandler(e) {
    e.preventDefault();

    addIsOpenToLightbox(e.target);
}

function removeLightBox() {
    document.querySelector('.lightbox__image').src = '';
    document.querySelector('.js-lightbox').classList.remove('is-open');
}

function onCloseHandler(e) {
    e.preventDefault();

    removeLightBox()
}

function onPushEsc(e) {
    e.preventDefault();

    if (e.keyCode == 27) { removeLightBox() }
}

elem.addEventListener('click', onClickHandler);

document.querySelector('[data-action="close-lightbox"]').addEventListener('click', onCloseHandler);
document.querySelector('.lightbox__overlay').addEventListener('click', onCloseHandler);
document.addEventListener('keydown', onPushEsc);
