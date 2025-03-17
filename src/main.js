import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from '../js/pixabay-api';
import { createGalleryCardTemplate } from '../js/render-functions';
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

document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
});

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
        lightbox = new SimpleLightbox('.gallery a', {
          captions: true,
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
          scrollZoom: false,
        });
      } else {
        lightbox.refresh();
      }

      data.hits.forEach(image => {
        console.log(image.webformatURL);
        console.log(image.tags);
      });
    })
    .catch(error => {
      console.error('Помилка запиту:', error);
      iziToast.show({
        color: 'red',
        message: `Error loading images. Please try again later.`,
      });
    })
    .finally(() => {
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
