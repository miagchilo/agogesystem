import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments";
import { Navigation, MobileNav } from "./style";
import M from "materialize-css";

class Header extends Component {
  componentDidMount() {
    const elem = document.querySelector(".sidenav");
    const instance = M.Sidenav.init(elem, {
      edge: "right",
      inDuration: 250
    });
  }

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
      <React.Fragment>
        <Navigation>
          <MobileNav className="sidenav valign-wrapper" id="mobile-demo">
            <div className="adjustCenter">
              <li className="close">
                <a className="sidenav-close" href="#!">
                  <i className="large material-icons icon">close</i>
                </a>
              </li>
              <li>
                <a href="sass.html">Home</a>
              </li>
              <li>
                <a href="badges.html">Coaching</a>
              </li>
              <li>
                <a href="collapsible.html">Contact Us</a>
              </li>
              <li>
                <a href="mobile.html">Follow Us</a>
              </li>
            </div>
          </MobileNav>
          <a
            href="#!"
            data-target="mobile-demo"
            className="sidenav-trigger right"
            onClick={() => {
              console.log("clicked");
            }}
          >
            <i className="material-icons">menu</i>
          </a>
          <div className="nav-wrapper hide-on-med-and-down container">
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
      </React.Fragment>
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
