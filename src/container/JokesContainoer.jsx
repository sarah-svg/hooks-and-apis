import React, { useEffect, useState } from 'react';
import ManyJokes from '../components/app/components/ManyJokes';
import { fetchJokes } from '../utilis/fetchJokes';

const JokesContainer = () => {

  const [jokes, setJoke] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchJokes().then((joke) => {
      setJoke(joke);
      setLoading(false);
    });
  }, []);
  if(isLoading) return <div text = "laoding a few funny jokes">
            LOADING YOU SOME FUNNY JOKES.............................
  </div>;
  return <><ManyJokes jokes = {jokes}/></>;
};

export default JokesContainer;
