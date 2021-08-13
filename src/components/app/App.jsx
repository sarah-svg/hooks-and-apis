import React from 'react';
import Characters from '../../container/Characters';
import HeyArnoldPage from '../../container/HeyArnoldPage';
import RickAndMortyContaionor from '../../container/RickAndMortyContainor';
import TvContainer from '../../container/TvContainer';

export default function App() {
  return <>
    <TvContainer/>
    <Characters/>
    <RickAndMortyContaionor/>
    <HeyArnoldPage/>
  </>;
}

