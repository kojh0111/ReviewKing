import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { RankPage } from "./containers/rankpage";
import { TestPage } from "./containers/testpage";
import { ReviewPage } from "./containers/reviewPage";
import { IntroducePage } from "./containers/introducepage";
import { Marginer } from "./components/marginer";
import { TopSection } from "./containers/homepage/topSection";
import tabTitle from "./const/tabtitle";
import TabMenuItem from "./components/tabMenuitem/TabMenuItem";
import { Footer } from "./components/footer";



function App() {
  return (

    <div className = "PageContainer">
        
        <Helmet>
            <title>리뷰왕</title>
        </Helmet>

        <TopSection />

      <Router>

        <div className="tabContainer">
            {tabTitle.map((item, index) => {
                return <TabMenuItem key={index} title={item.title} path={item.path} exact={item.exact}/>;
            })}
        </div>

          <Switch>

            <Route exact path="/">
              <ReviewPage/>
            </Route>

            <Route path="/info">
              <IntroducePage/>
            </Route>

            <Route path="/rank">
              <RankPage />
            </Route>

            <Route path="/Test">
              <TestPage />
            </Route>

          </Switch>

          <Marginer direction="vertical" margin="2em"/>

      </Router>

    <Footer/>
    
    </div>
  )
}

export default App;

