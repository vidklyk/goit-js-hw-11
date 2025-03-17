import { fetchImages } from './js/pixabay-api';
import {
  createGalleryCardTemplate,
  initializeLightbox,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader.is-hidden');

let lightbox = null;

function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

const onSearchFormSubmit = event => {
  event.preventDefault();
  showLoader();

  const searchedQuery = event.currentTarget.elements.search_text.value.trim();

  if (!searchedQuery) {
    hideLoader();
    return;
  }

  event.currentTarget.elements.search_text.value = '';

  fetchImages(searchedQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          color: 'red',
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
        hideLoader();
        return;
      }

      const markup = data.hits.map(createGalleryCardTemplate).join('');
      galleryEl.innerHTML = markup;

      if (!lightbox) {
        lightbox = initializeLightbox();
      } else {
        lightbox.refresh();
      }

      data.hits.forEach(image => {
        console.log(image.webformatURL);
        console.log(image.tags);
      });
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
});
