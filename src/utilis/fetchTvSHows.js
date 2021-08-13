export const fetchTvShows = () => {
  // eslint-disable-next-line max-len
  return fetch('http://api.tvmaze.com/shows?page=1').then((res) => res.json());

};

