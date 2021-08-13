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


  if(loading) return; 
  <div text="loading"></div>;
  return <div>Tv Show<ListTv actor={tv}/></div>
  ;
};

export default TvContainer;
