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
import Error from './containers/errorpage/error';
import CategoryChoice from './containers/testpage/categoryChoice';

function App() {
  return (
    <div className="PageContainer">
      <Helmet>
        <title>리뷰왕</title>
      </Helmet>

      <TopSection />

      <Router>
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
          <Route path="/" component={ReviewPage} exact={true} />
          <Route path="/info" component={IntroducePage} exact={true} />
          <Route path="/rank" component={RankPage} exact={true} />
          <Route path="/what-to-eat/" component={TestPage} exact={true} />
          <Route
            path="/what-to-eat/category"
            component={CategoryChoice}
            exact={true}
          />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
      <Marginer direction="vertical" margin="2em" />
      <Footer />
    </div>
  );
}

export default App;
