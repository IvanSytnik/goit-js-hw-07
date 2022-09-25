import { galleryItems } from './gallery-items.js';
// Change code below this line
function createImg(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join("")
};
console.log(galleryItems);
const imgs = document.querySelector(".gallery");

const cardsImg = createImg(galleryItems);

imgs.insertAdjacentHTML('beforeend', cardsImg);

imgs.addEventListener('click', event => {
 if(!event.target.classList.contains('gallery__link')) {
    return;
 }
  return event.target.preventDefault();
}
)

imgs.addEventListener('click', fgfds)
 function fgfds(evt) {
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

 return instance.show();

 }