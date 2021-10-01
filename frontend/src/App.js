import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Homepage } from "./containers/homepage";

import { RankPage } from "./containers/rankpage";
import { TestPage } from "./containers/testpage";
import { ReviewPage } from "./containers/reviewPage";
import { IntroducePage } from "./containers/introducepage";
// import { IntroducePage } from './containers/introducepage';

function App() {
  return (
    <PageContainer>
      <Helmet>
        <title>리뷰왕</title>
      </Helmet>

      <TopSection />

      <div className="tabContainer">
        {tabTitle.map((item, index) => {
          return (
            <TabMenuItem
              key={index}
              title={item.title}
              path={item.path}
              exact={item.exact}
            />
          );
        })}
      </div>


      

      <Marginer direction="vertical" margin="2em" />
      <Router>
        <Switch>
          <Route exact path="/">
            <IntroducePage />
          </Route>

          <Route path="/review">
            <ReviewPage />
          </Route>

          <Route path="/rank">
            <RankPage />
          </Route>

          <Route path="/Test">
            <TestPage />
          </Route>
        </Switch>
         {/* <ServicesSection /> */}
      </Router>
      

      <Footer />
    </PageContainer>
  );
}

export default App;
