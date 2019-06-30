import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import GlobalStyle from "../styles/GlobalStyle";
//! defining all actions as *

import Header from "./Header";
import Loading from "./Loading";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

const Landing = lazy(() => import("./Landing"));

const Landings = lazy(() => {
  return Promise.all([
    import("./Landing"),
    new Promise(resolve => setTimeout(resolve, 5000))
  ]).then(([moduleExports]) => moduleExports);
});

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={Landings} />
        </Suspense>
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
