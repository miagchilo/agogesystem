import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import GlobalStyle from "../styles/GlobalStyle";
//! defining all actions as *

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Route exact path="/" component={Landing} />
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
