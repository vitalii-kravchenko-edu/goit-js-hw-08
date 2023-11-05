import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `)
  .join("");
}

const instance = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
