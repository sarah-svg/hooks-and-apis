/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const  Character = ({ id, name, quoteText }) => {
  return (
    <div className= {style.display}>
      <p>{id}</p> 
      <p>{name}</p> 

      <p>{quoteText}</p> 

    </div>
  );
};


Character.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  quoteText: PropTypes.string,
};

export default Character;


