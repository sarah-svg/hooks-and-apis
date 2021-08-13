import React from 'react';
import PropTypes from 'prop-types';

function Tv({ id, name, image, genres, summary, premiered }) {

  
  return (
    <div>
      <h1>Shows</h1>
      <div>Title: {name}</div>
      <img src={image.medium}/>
      <div>Short Summary: {summary}</div>
      <div>Date premierd: {premiered}</div>
      <div>Genre: {genres[0]}</div>
      <div>Movie id:{id}</div> 
      <br></br>
    </div>
  );
}

Tv.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  country: PropTypes.string,
  image: PropTypes.object
};

export default Tv;

