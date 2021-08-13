import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JokesContainer from '../../container/JokesContainoer';
import TvContainer from '../../container/TvContainer';
import Characters from '../../container/Characters';
import HeyArnoldPage from '../../container/HeyArnoldPage';

import RickAndMortyContaionor from '../../container/RickAndMortyContainor';




export default function App(){
  return  (
    <Router>
      <Switch>
        <Route exact path="/tv" component={TvContainer}/>
        <Route exact path="/joke" component={JokesContainer}/>
        <Route exact path="/hey" component={HeyArnoldPage}/>
        <Route exact path="/rick" component={RickAndMortyContaionor}/>
        <Route exact path="/twin" component={Characters}/>
      </Switch>
    </Router>


  );
}
