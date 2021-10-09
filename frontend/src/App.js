import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import RankPage from './containers/rankpage';
import TestPage from './containers/testpage';
import ReviewPage from './containers/reviewPage';
import IntroducePage from './containers/introducepage';
import Marginer from './components/marginer';
import TopSection from './containers/homepage/topSection';
import tabTitle from './const/tabtitle';
import TabMenuItem from './components/tabMenuitem/TabMenuItem';
import Footer from './components/footer';
import FirstChoice from './containers/testpage/firstChoice';
import SecondChoice from './containers/testpage/secondChoice';
import TestResult from './containers/testpage/testResult';
import RankResult from './containers/rankpage/rankResult';
import SelectedReviewPage from './containers/selectedReviewPage';

function App() {
  return (
    <div className="PageContainer">
      <Helmet>
        <title>리뷰왕</title>
      </Helmet>

      <Router>
        <TopSection />
        <div className="tabContainer">
          {tabTitle.map(item => (
            <TabMenuItem
              key={item.title}
              title={item.title}
              path={item.path}
              exact={item.exact}
            />
          ))}
        </div>

        <Switch>
          <Route path="/" component={IntroducePage} exact={true} />

          <Route path="/review" component={ReviewPage} exact={true} />
          <Route
            path="/review/:name"
            component={SelectedReviewPage}
            exact={true}
          />
          <Route path="/rank" component={RankPage} exact={true} />
          <Route
            path="/rank/result/:category"
            component={RankResult}
            exact={true}
          />
          <Route path="/what-to-eat" component={TestPage} exact={true} />
          <Route
            path="/what-to-eat/category"
            component={FirstChoice}
            exact={true}
          />
          <Route
            path="/what-to-eat/category/:tastes"
            component={SecondChoice}
            exact={true}
          />
          <Route
            path="/what-to-eat/category/:tastes/:menus"
            component={TestResult}
            exact={true}
          />

          <Marginer direction="vertical" margin="2em" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
