import axios from 'axios';

const myApiKey = '17309902-7cbadf7b99e6a7450a84508e7';

export function fetchImages(searchedQuery) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: myApiKey,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
}

//   return fetch(
//     `https://pixabay.com/api/?key=17309902-7cbadf7b99e6a7450a84508e7&q=${searchedQuery}&image_type=photo$orientation=horizontal$safesearch=true`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
