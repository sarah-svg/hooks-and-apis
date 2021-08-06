import React from 'react';
import PropTypes from 'prop-types';

function HeyArnold({ _id, name, image }) {
  return (
    <div>
      <figure>
        <figcaption>{name}</figcaption>
        <figcaption>{_id}</figcaption>
        <img src={image}></img>
               
      </figure> 
    </div>
  );
}

HeyArnold.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string
};

export default HeyArnold;

