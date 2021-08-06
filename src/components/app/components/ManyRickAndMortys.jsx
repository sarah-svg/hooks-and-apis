import React from 'react';
import PropTypes from 'prop-types';
import RickNMorty from './RickNMorty';

function ManyRickAndMortys({ everyone }) {

  const everyoneElements = everyone.map((person => {
    return <li key = {person.id + person.species}>
      <RickNMorty {...person}/>
    </li>;
  }));


  return (
 
    <div>
      <ul>
        {everyoneElements} 
      </ul>    
    </div>
  );
}

ManyRickAndMortys.propTypes = {
  everyone: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    image: PropTypes.string
  
  }))
};

export default ManyRickAndMortys;

