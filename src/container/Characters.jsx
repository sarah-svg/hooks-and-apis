import React, { useState, useEffect } from 'react';

import ManyCharacters from '../components/app/components/Characters';

import { getAllCharacters } from '../utilis/fetch';

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {

    getAllCharacters().then((characters) => {     
      setCharacters(characters);

      setLoading(false);
    });
  }, []);

  if(loading)
    return <div text="loading">Loading.....</div>;
  return <div><ManyCharacters characters= {characters}/></div>;
};

export default Characters;

