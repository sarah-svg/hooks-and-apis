/* eslint-disable max-len */
 export const getAllCharacters = () => {
  return fetch('https://damp-cove-34137.herokuapp.com/api/quotes/limit/20').then((res) => res.json()).then(json => json);

};


