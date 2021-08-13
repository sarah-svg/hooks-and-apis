import React from 'react';
import PropTypes from 'prop-types';
import Joke from './Joke';

function ManyJokes({ jokes }) {
  const elementsJoke = jokes.map((joke) => {
    return <li key = {joke.id + joke.type} >
      <Joke {...joke} />
    </li>;
  });





  return (
    <ul>
      {elementsJoke}     
    </ul>
  );
}

ManyJokes.propTypes = {
  jokes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    punchline: PropTypes.string,
    setup: PropTypes.string
  })).isRequired

};

export default ManyJokes;

