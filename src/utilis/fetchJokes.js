/* eslint-disable max-len */
export const fetchJokes = () => {
  return fetch('https://official-joke-api.appspot.com/jokes/ten').then((result) => result.json());
};
// .then((json) => console.log(json))
