// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';

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
    captionDelay: 250,
    captionsData: "alt",
  });
