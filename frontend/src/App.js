import './App.css';
import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route } from 'react-router-dom';

import { Homepage } from './containers/homepage';

import { RankPage } from './containers/rankpage';
import { TestPage } from './containers/testpage';
import { ReviewPage } from './containers/reviewPage';
import { IntroducePage } from './containers/introducepage';



function App() {
  return (

    <Router>
        <Switch>

          <Route exact path="/">
            <IntroducePage/>
          </Route>

          <Route exact path="/info">
            <IntroducePage/>
          </Route>

          <Route path="/review">
            <ReviewPage/>
          </Route>

          <Route path="/rank">
            <RankPage />
          </Route>

          <Route path="/Test">
            <TestPage />
          </Route>

        </Switch>
    </Router>
  )
}

export default App;

