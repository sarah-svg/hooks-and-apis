import React from 'react';
import PropTypes from 'prop-types';
import Tv from './Tv';

function ListTv({ actor }) {
  const tvElements = actor.map((person) => {
    return <li key={person.id + person.image}><Tv  {...person}/></li>;
  });


  return (
    <ul>
      {tvElements}  
    </ul>
  );
}

ListTv.propTypes = {
  actor: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    country: PropTypes.string,
    image: PropTypes.object
  })).isRequired
};

export default ListTv;

