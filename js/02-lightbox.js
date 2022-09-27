import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
function createImg(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`
    }).join("")
};

const imgs = document.querySelector(".gallery");

const cardsImg = createImg(galleryItems);

imgs.insertAdjacentHTML('beforeend', cardsImg);
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

