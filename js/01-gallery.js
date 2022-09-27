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

const imgs = document.querySelector(".gallery");

const cardsImg = createImg(galleryItems);

imgs.insertAdjacentHTML('beforeend', cardsImg);





imgs.addEventListener('click', event => {
  return event.preventDefault();
 }

)

imgs.addEventListener('click', fgfds);
 function fgfds(evt) {

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

document.addEventListener("keydown", (KeyboardEvent) => {
  if(KeyboardEvent.key == "Escape") {
    return instance.close();
  }
}
);
 return instance.show();

}

 
 
 