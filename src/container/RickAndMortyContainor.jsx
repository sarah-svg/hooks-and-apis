/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import ManyRickAndMortys  from '../components/app/components/ManyRickAndMortys';
import { rickFetch } from '../utilis/rickFetch';


const RickAndMortyContaionor = () => {
  const [everyone, setEveryone] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    rickFetch().then((everyone) => {
      setEveryone(everyone);
      setLoading(false);
    });

  }, []);
  if(loading) return <div text="loading">Loading.....</div>;

  return <><ManyRickAndMortys everyone={everyone} /></>;



};
export default RickAndMortyContaionor;

