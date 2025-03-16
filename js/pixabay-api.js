export function fetchData(searchedQuery) {
  return fetch(
    `https://pixabay.com/api/?key=17309902-7cbadf7b99e6a7450a84508e7&q=${searchedQuery}&image_type=photo$orientation=horizontal$safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
