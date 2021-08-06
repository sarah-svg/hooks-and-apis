import React, { useState, useEffect } from 'react';
import ManyArnolds from '../components/app/components/ManyArnolds';
import { fetchArnold } from '../utilis/arnoldFetch';

const HeyArnoldPage = () => {
  const [loading, setloading] = useState(true);
  const [people, setpeople] = useState([]);
  useEffect(() => {
    fetchArnold().then((people) => {
      setpeople(people);
      setloading(false);
    });
  }, []);

  if(loading) return <div text="loading"></div>;
  return <div> <ManyArnolds people={people}/></div>;
};

export default HeyArnoldPage;
