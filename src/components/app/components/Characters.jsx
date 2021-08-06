import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';



function ManyCharacters({ characters }) {
  const characterElements = characters.map((character) => {
   
    return (
      <div key={character.id + character.name}>
        <Character {...character} />
      
      </div>);
    

  });
  
  
  return (
    <ul>
      {characterElements}     
    </ul>
  );
}

ManyCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    quoteText: PropTypes.string,

  }))
};

export default ManyCharacters;

