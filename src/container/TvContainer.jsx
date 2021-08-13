import React, { useState, useEffect } from 'react';
import ListTv from '../components/app/components/ListTv';
import { fetchTvShows } from '../utilis/fetchTvSHows';

const TvContainer = () => {
  const [loading, setloading] = useState(false);
  const [tv, setTv] = useState([]);

  useEffect(() => {
    fetchTvShows().then((person) => {
      setTv(person);
      setloading(false);
    });
  }, []);
  console.log(tv);

  if(loading) return; 
  <div text="loading"></div>;
  return <ListTv actor={tv}/>
  ;
};

export default TvContainer;
