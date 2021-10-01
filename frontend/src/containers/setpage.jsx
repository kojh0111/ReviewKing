import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route } from 'react-router-dom';

import { Homepage } from './homepage';
import { ReviewPage } from './reviewPage';


const SetPage = () => {

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
        
    );
};

export default SetPage;