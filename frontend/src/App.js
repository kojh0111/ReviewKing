import './App.css';
import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route } from 'react-router-dom';
    
import { Homepage } from './containers/homepage';
import { ReviewPage } from './containers/reviewPage';



function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Homepage/>
        </Route>

        <Route path="/review">
          <ReviewPage />
        </Route>

      </Switch>
    </Router>
  )
}

export default App;

