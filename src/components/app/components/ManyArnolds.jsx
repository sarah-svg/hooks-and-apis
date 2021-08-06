import React from 'react';
import HeyArnold from './HeyArnold';
import PropTypes from 'prop-types';

function ManyArnolds({ people }) {

  const manyArnoldElements = people.map((person) => {
    return <li key={person._id + person.name}>
      <HeyArnold {...person}/>
    </li>;
  });
  return (
    <div>
      {manyArnoldElements}  
    </div>
  );
}

ManyArnolds.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

export default ManyArnolds;

