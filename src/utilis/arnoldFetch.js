/* eslint-disable max-len */
export const fetchArnold = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters').then((res) => res.json()).then(json => json);
};
