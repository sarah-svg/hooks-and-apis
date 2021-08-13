import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import JokesContainer from '../../container/JokesContainoer';
import TvContainer from '../../container/TvContainer';
import Characters from '../../container/Characters';
import HeyArnoldPage from '../../container/HeyArnoldPage';

import RickAndMortyContaionor from '../../container/RickAndMortyContainor';




export default function App(){
  return  (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tv">Tv shows</Link>
            </li>
            <li>
              <Link to="/joke">Random Jokes</Link>
            </li>
            <li>
              <Link to="hey">Hey Arnold Characters</Link>
            </li>
            <li>
              <Link to="/rick">Rick and Morty characters</Link>
            </li>
            <li>
              <Link to="/twin">Twin peeks quotes</Link>
            </li>
          </ul>
        </nav>
      </div>
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
