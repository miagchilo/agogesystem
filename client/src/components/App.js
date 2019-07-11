import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import GlobalStyle from "../styles/GlobalStyle";
//! defining all actions as *

import Header from "./Header";
import Coaching from "./Coaching";
import Loading from "./Loading";
import Footer from "./Footer/";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

const Landings = lazy(() => {
  return Promise.all([
    import("./Landing"),
    new Promise(resolve => setTimeout(resolve, 100))
  ]).then(([moduleExports]) => moduleExports);
});

const NoHeadFoot = () => (
  <React.Fragment>
    <GlobalStyle />
    <Route path="/coaching" component={Coaching} />
  </React.Fragment>
);

const DefaultLayout = () => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <Suspense fallback={<Loading />}>
      <Route exact path="/" component={Landings} />
      <Route exact path="/coaching" component={Coaching} />
      <Footer />
    </Suspense>
    <Route exact path="/surveys" component={Dashboard} />
    <Route path="/surveys/new" component={SurveyNew} />
  </React.Fragment>
);
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/coaching" component={NoHeadFoot} />
          <Route component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
