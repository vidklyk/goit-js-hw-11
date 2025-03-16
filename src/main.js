import { fetchData } from '../js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');

const createGalleryCardTemplate = imgInfo => {
  return `<li class="gallery-card">
            <img src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" class="gallery-img">
          </li>`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedQuery = event.currentTarget.elements.search_text.value.trim();

  if (!searchedQuery) return;

  fetchData(searchedQuery).then(data => {
    const markup = data.hits.map(createGalleryCardTemplate).join('');
    galleryEl.innerHTML = markup;
    const imagesArray = data.hits;
    if (data.hits.length === 0) {
      iziToast.show({
        color: 'red',
        message: `Sorry, there are no images matching your search query. Please try again!
`,
      });
    }
    imagesArray.forEach(image => {
      console.log(image.webformatURL);
      console.log(image.tags);
    });
  });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
