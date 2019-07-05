import React from "react";
// import { Link } from "react-router-dom";
import { FooterStyle } from "./style";

import logo from "../../images/load.png";

const Footer = () => {
  return (
    <FooterStyle className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <div className="logo-box left">
              <img src={logo} alt="agoge" className="footer_logo" />
            </div>
            <div className="right">
              <p>
                "No man has the right to be an amature in the matter of physical
                training. It is a shame for a man to grow old without seeing the
                beauty and strength of which his body is capable" ~socrates
              </p>
            </div>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Follow us on social media</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-facebook-messenger" />
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
            <div className="emailbox">
              <div className="left-align">
                email:
                <a className="email" href="mailto:fueledbytaching@gmail.com">
                  agogesystem@gmail.com
                </a>
              </div>
              <ul>
                <li>
                  <a href="!#">Terms of Service</a>
                </li>
                <li>
                  <a href="!#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright ">
        <div className="container right-align">
          © 2019 Copyright by{" "}
          <a href="http://takatoshiwada.com">Agoge System</a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
