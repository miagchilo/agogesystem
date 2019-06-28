import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments";

import { Navigation } from "./style";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key={1}>
            <Payments />
          </li>,
          // <li key="3" style={{ margin: "0 10px" }}>
          //   Credits: {this.props.auth.googleId}
          // </li>,
          <li key={2}>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <Navigation>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Logo
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Train with us</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            {this.renderContent()}
          </ul>
        </div>
      </Navigation>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
