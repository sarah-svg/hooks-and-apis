import React from 'react';
import PropTypes from 'prop-types';

function Joke({ id, type, punchline, setup }) {
  return (
    <div>
      <br></br>
      <span>id: {id}</span>  
      <br></br>

      <span>type of joke: {type}</span>   
      <br></br>

      <span>question: {setup}</span> 
      <br></br>

      <span> punchline: {punchline}</span> 
      <br></br>
      <br></br>

    </div>
  );
}

Joke.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  punchline: PropTypes.string,
  setup: PropTypes.string
};

export default Joke;

