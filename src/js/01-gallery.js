// Add imports above this line

import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const  gallery= document.querySelector(".gallery");

const images = galleryItems.map(
    (image) =>
      `<a class="gallery__item" href="${image.original}" ">
<img class="gallery__image" 
src="${image.preview}" 
alt="${image.description}" />
</a>`
  ).join("");
   
gallery.insertAdjacentHTML("afterbegin", images);

new SimpleLightbox(".gallery a", {
  ovelayOpacity:0.9, 
  captionsData:'alt', 
  captionDelay: 250,
  animationSpeed:400,
  });
