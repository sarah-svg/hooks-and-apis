import React from 'react';
import PropTypes from 'prop-types';

function RickNMorty({ id, name, status, species, gender, image }) {
  return (
    <div key={id + status}>
      <div>{name}</div> 
      <img src={image}/>  
      <span>{status}</span>
      <span>{species}</span>
      <span>{gender}</span>
    </div>
  );
}

RickNMorty.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  image: PropTypes.string

};


export default RickNMorty;

